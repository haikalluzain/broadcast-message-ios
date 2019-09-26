import React from 'react';
import {
    Dimensions,
    Alert,
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
    FlatList,
    Image
} from 'react-native';
import { Async } from '../../helper/AsyncStorage'
import { color } from '../../assets/colors'
import { font } from '../../assets/fonts'
import { ImageUrl } from '../../config/apiConfig'
import mainStyle from '../../assets/main'
import homeStyle from '../../assets/styles/home'
import API, { BASE_URL } from '@api'

export default class EmailScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            getEmail: false,
            dataEmail: [],
            countEmail: 0,
        };
    }

    componentDidMount() {
        Async.get("token").then((value) => {

            API.get(`${BASE_URL}getTemplateEmail?token=${value}`).then((res) => {
                if (res.code == "200") {
                    this.setState({ dataEmail: res.data, getEmail: true, countEmail: res.data.length })
                }
            })

        })

    }

    getEmail(data) {
        this.props.navigation.navigate("SendEmail", { data })
        // Alert.alert(data);
    }


    renderItemEmail = ({ item }) => {
        return (
            <TouchableOpacity onPress={this.getEmail.bind(this, item)}>
                <View style={[homeStyle.cardContainerStyle, mainStyle.column]}>
                    <View style={{
                        overflow: 'hidden',
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                    }}>
                        <Image source={{
                            uri: `${ImageUrl}${item.tema.template_preview}`
                        }} style={{
                            width: Dimensions.get('window').width - 20,
                            resizeMode: 'stretch',
                            height: 200
                        }} />
                        <View style={{
                            position: 'absolute',
                            alignSelf: 'flex-end',
                        }}>
                            <View style={[homeStyle.badgeEmail]}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    color: color.grey_800,
                                    fontFamily: font.Nunito.regular

                                }}>{item.tema.nama}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', margin: 10 }}>
                        <View style={[mainStyle.flex, mainStyle.m_5]}>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 20,
                                fontFamily: font.Nunito.regular,
                                color: color.grey_900
                            }}>{item.judul}</Text>
                            <Text numberOfLines={3} style={mainStyle.mt_10}>{item.isi}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View>
                <View style={[
                    mainStyle.flex,
                    mainStyle.row,
                    mainStyle.justify_space_between,
                    mainStyle.m_20,
                    mainStyle.my_30
                ]}>
                    <Text style={{
                        fontSize: 17,
                        fontWeight: 'bold',
                        fontFamily: font.Nunito.regular,
                        color: color.black
                    }}>
                        Template Email
                    </Text>

                    <Text style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: color.grey_600,
                        fontFamily: font.Nunito.regular

                    }}>
                        {this.state.countEmail} hasil
                    </Text>
                </View>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={this.state.dataEmail}
                    renderItem={this.renderItemEmail}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
}