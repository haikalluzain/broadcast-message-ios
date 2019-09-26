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
import mainStyle from '../../assets/main'
import homeStyle from '../../assets/styles/home'
import API, { BASE_URL } from '@api'

export default class PushScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            getPush: false,
            dataPush: [],
            countPush: 0,
        };
    }

    componentDidMount() {
        Async.get("token").then((value) => {

            API.get(`${BASE_URL}getTemplatePush?token=${value}`).then((res) => {
                if (res.code == "200") {
                    this.setState({ dataPush: res.data, getPush: true, countPush: res.data.length })
                }
            })

        })

    }

    getPush(data) {
        this.props.navigation.navigate("SendNotif", { data })
        // Alert.alert(data);
    }


    renderItemPush = ({ item }) => {
        return (
            <TouchableOpacity onPress={this.getPush.bind(this, item)}>
                <View style={[homeStyle.cardContainerStyle, mainStyle.column]}>
                    <View style={[mainStyle.row, mainStyle.m_20]}>
                        <View style={{ flex: 1, flexWrap: 'wrap' }}>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 20,
                                fontFamily: font.Nunito.regular,
                                color: color.black
                            }}>{item.judul}</Text>
                            <Text numberOfLines={2} style={mainStyle.mt_5}>{item.isi}</Text>
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
                        Template Push
          </Text>

                    <Text style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: color.grey_600,
                        fontFamily: font.Nunito.regular

                    }}>
                        {this.state.countPush} hasil
          </Text>
                </View>
                <FlatList
                    contentContainerStyle={mainStyle.pb_30}
                    showsHorizontalScrollIndicator={false}
                    data={this.state.dataPush}
                    renderItem={this.renderItemPush}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
}