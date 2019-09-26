import React, { Component } from 'react';
import {
    View, Text, Button, TextInput, Image,
    TouchableWithoutFeedback, StatusBar, Keyboard, TouchableOpacity,
    KeyboardAvoidingView, Alert
} from 'react-native';
import loginStyle from '../assets/styles/login';
import mainStyle from '../assets/main';
import API, { BASE_URL } from '@api'
import { Async } from '../helper/AsyncStorage'
import { SafeAreaView } from 'react-navigation'
import { color } from '../assets/colors'
import Toast from 'react-native-whc-toast'
import FeatherIcon from 'react-native-vector-icons/Feather';



export default class Login extends Component {

    static navigationOptions = {
        title: 'Login',
        /* No more header config here! */
    };

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            passHide: true,
            iconPass: 'eye'
        }
    }
    componentWillMount() {

    }
    componentDidMount() {
        this._loadInitialState().done();
    }
    _loadInitialState = async () => {
        var value = await Async.get('email');
        this.setState({ email: value });
    }

    showPassword = () => {
        let icon = (this.state.passHide) ? 'eye-off' : 'eye'
        this.setState({
            passHide: !this.state.passHide,
            iconPass: icon
        })
    }

    Login = () => {
        const { email, password } = this.state
        let data = {
            email: email,
            password: password
        }
        API.post(BASE_URL + "login_post", data).then((res) => {
            if (res.code == "200") {
                Alert.alert("Selamat datang!", res.user_data.nama)
                Async.set("login", "true");
                Async.set('email', res.user_data.email)
                Async.set('token', res.token)
                this.props.navigation.navigate('Home')

                this.setState({ password: '', email: res.user_data.email })

            }
            else {
                this.refs.toast.showTop(res.message);
                // Alert.alert(
                //     " ", res.message)
            }
        })
    }

    checkAsync(value) {
        Async.set("email", value);
        this.setState({ email: value })
    }

    render() {
        return (
            <SafeAreaView style={mainStyle.flex}>
                <StatusBar barStyle='dark-content' />
                <KeyboardAvoidingView style={mainStyle.flex} behavior='padding'>
                    <View style={loginStyle.container}>

                        <Text style={loginStyle.header}>LOGIN</Text>
                        <TextInput style={loginStyle.textInput} placeholder="Email"
                            onChangeText={(email) => this.setState({ email })}
                            underlineColorAndroid='transparent'
                            value={this.state.email} />

                        <View style={[
                            loginStyle.textInput,
                            mainStyle.row,
                            mainStyle.justify_space_between]}>
                            <TextInput secureTextEntry={this.state.passHide} placeholder="Password"
                                style={{
                                    width: '90%',
                                    fontSize: 16,
                                }}
                                onChangeText={(password) => this.setState({ password })}
                                underlineColorAndroid='transparent'
                                value={this.state.password} />

                            <TouchableOpacity onPress={this.showPassword}>
                                <FeatherIcon name={this.state.iconPass} size={18} />
                            </TouchableOpacity>
                        </View>



                        <TouchableOpacity style={loginStyle.btnLogin} onPress={this.Login}>
                            <Text style={loginStyle.btnLoginText}>Log In</Text>
                            <Toast ref="toast" style={{
                                backgroundColor: color.grey_700,
                                borderRadius: 10
                            }} />
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>


        );
    }
}