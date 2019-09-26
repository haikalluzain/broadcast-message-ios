import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
    TouchableWithoutFeedback,
    KeyboardAvoidingView
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather'
import { SafeAreaView } from 'react-navigation';
import mainStyle from '../../assets/main'
import { color } from '../../assets/colors'
import { TextInput } from 'react-native-gesture-handler';

export default class SendEmail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            judul: '',
            isi: '',
            code: ''
        };

        this.editor = null;
    }

    back = () => {
        this.props.navigation.goBack()
    }


    componentDidMount() {
        let data = this.props.navigation.state.params.data;
        this.setState({
            judul: data.judul,
            isi: data.isi,
            code: data.tema.code

        })
    }

    render() {
        return (
            <SafeAreaView style={[mainStyle.flex]}>
                <ScrollView style={[mainStyle.flex]}>
                    <View style={[
                        mainStyle.row, 
                        mainStyle.px_20,
                        mainStyle.py_10,
                        mainStyle.justify_space_between,
                        mainStyle.toolbar]}>
                        <TouchableOpacity onPress={this.back}>
                            <FeatherIcon name="chevron-left" size={30} color={color.black}/>
                        </TouchableOpacity>

                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 20,
                            color: color.black
                        }}>
                            Kirim Email
                        </Text>

                        <TouchableOpacity>
                            <FeatherIcon name="send" size={25} color={color.black} />
                        </TouchableOpacity>
                    </View>

                    <View style={[
                        mainStyle.m_20
                    ]}>
                        <Text style={[
                            mainStyle.my_10,
                            mainStyle.font_bold,
                            mainStyle.f_15
                        ]}>Judul</Text>
                        <TextInput style={mainStyle.textInput} placeholder="Judul"
                            onChangeText={(judul) => this.setState({ judul })}
                            underlineColorAndroid='transparent'
                            value={this.state.judul} />

                    </View>

                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        marginTop: 10,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 1,
        alignItems: 'stretch',
    },
    toolbarButton: {
        fontSize: 20,
        width: 28,
        height: 28,
        textAlign: 'center'
    },
    italicButton: {
        fontStyle: 'italic'
    },
    boldButton: {
        fontWeight: 'bold'
    },
    underlineButton: {
        textDecorationLine: 'underline'
    },
    lineThroughButton: {
        textDecorationLine: 'line-through'
    },
});