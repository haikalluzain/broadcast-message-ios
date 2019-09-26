import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Alert,
    FlatList,
    TouchableOpacity,
    Keyboard
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import FeatherIcon from 'react-native-vector-icons/Feather'
import { SafeAreaView } from 'react-navigation';
import mainStyle from '../../assets/main'
import sendStyle from '../../assets/styles/send'

import API, { BASE_URL } from '@api'
import { Async } from '../../helper/AsyncStorage'
import { color } from '../../assets/colors'
import { TextInput } from 'react-native-gesture-handler';

import Autocomplete from 'react-native-autocomplete-input';
import { font } from '../../assets/fonts';

export default class SendSms extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            token: '',
            id_template: '',
            isi: '',
            gender: '2',
            provinsi: [],
            selectedProv: [],
            query: ''

        };
    }

    back = () => {
        this.props.navigation.goBack()
    }


    componentDidMount() {
        let data = this.props.navigation.state.params.data;
        this.setState({
            id_template: data.id,
            isi: data.isi,

        })

        Async.get("token").then((value) => {

            API.get(`${BASE_URL}getProvinsiFromUser?token=${value}`).then((res) => {
                // console.log(res)
                if (res.code == "200") {
                    this.setState({ provinsi: res.data, token: value })
                }
            })

        })
    }

    selectAll = () => {
        this.setState({
            gender: '2'
        })
    }

    selectMale = () => {
        this.setState({
            gender: '0'
        })
    }

    selectFemale = () => {
        this.setState({
            gender: '1'
        })
    }

    findProv(query) {
        if (query === '') {
            return [];
        }

        const { provinsi } = this.state;
        const regex = new RegExp(`${query.trim()}`, 'i');
        return provinsi.filter(prov => prov.provinsi.search(regex) >= 0);
    }

    onSelectProv(data) {
        Keyboard.dismiss()
        const { selectedProv } = this.state;
        let check = selectedProv.filter(x => String(x).includes(data))
        if (check.length < 1) {
            this.setState({
                query: '',
                selectedProv: selectedProv.concat(data)
            })
        } else {
            this.setState({ query: '' })
        }

        console.log(this.state.selectedProv)
    }

    onRemoveProv(data) {
        const { selectedProv } = this.state;
        const index = selectedProv.indexOf(data)
        if (index !== -1) {
            selectedProv.splice(index, 1);
            this.setState({ selectedProv: selectedProv });
        }
    }

    onSendSms = () => {
        const {
            token,
            isi,
            selectedProv,
            id_template,
            gender } = this.state
        let type = 1, data = {
            isi: isi,
            provinsi: selectedProv,
            type: type,
            id_template: id_template,
            jk: gender
        }

        if (selectedProv.length < 1 || isi == '') {
            Alert.alert("Harap lengkapi form")
        } else {
            API.post(`${BASE_URL}send_broadcast?token=${token}`, data)
                .then((res) => {
                    console.log(res)
                    if (res.code == "200") {
                        Alert.alert("Berhasil mengirim pesan sms")
                        this.props.navigation.goBack();
                    } else {
                        Alert.alert(res.message)
                    }
                })
        }

    }

    render() {

        const { query } = this.state;
        const provinsi = this.findProv(query);
        const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();
        return (
            <SafeAreaView style={[mainStyle.flex]}>
                <View style={[
                    mainStyle.row,
                    mainStyle.px_20,
                    mainStyle.py_10,
                    mainStyle.justify_space_between,
                    mainStyle.toolbar]}>
                    <TouchableOpacity onPress={this.back}>
                        <FeatherIcon name="chevron-left" size={30} color={color.black} />
                    </TouchableOpacity>

                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 20,
                        color: color.black
                    }}>
                        Kirim Notif
                        </Text>

                    <TouchableOpacity onPress={this.onSendSms}
                        style={mainStyle.shadow}>
                        <FeatherIcon name="send" size={25} color={color.black} />
                    </TouchableOpacity>
                </View>


                <KeyboardAwareScrollView style={[
                    mainStyle.flex,
                ]} keyboardShouldPersistTaps='handled'>

                    <View
                        style={mainStyle.flex}>

                        <Text style={[
                            mainStyle.my_10,
                            mainStyle.mt_20,
                            mainStyle.font_bold,
                            mainStyle.f_15,
                            mainStyle.mx_20
                        ]}>Pilih Provinsi</Text>
                        <Autocomplete
                            autoCapitalize="none"
                            autoCorrect={false}
                            // placeholderTextColor={colo}
                            style={[
                                mainStyle.textInput,
                                mainStyle.mx_20
                            ]}
                            listContainerStyle={{
                                marginHorizontal: 20,
                                borderWidth: 0,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 4,
                                },
                                shadowOpacity: 0.30,
                                shadowRadius: 4.65,

                                elevation: 8,
                            }}
                            listStyle={{
                                borderWidth: 0,
                            }}
                            inputContainerStyle={{ borderWidth: 0, }}
                            data={provinsi.length === 1 && comp(query, provinsi[0].provinsi) ? [] : provinsi}
                            defaultValue={query}
                            onChangeText={text => this.setState({ query: text })}
                            placeholder="Masukkan nama provinsi"
                            renderItem={({ item }) => (

                                <TouchableOpacity onPress={this.onSelectProv.bind(this, item.provinsi)}
                                    style={[
                                        mainStyle.m_10
                                    ]}>
                                    <Text style={styles.itemText}>
                                        {item.provinsi}
                                    </Text>
                                </TouchableOpacity>
                            )}
                        />


                        <View style={{
                            alignItems: 'center',
                            flex: 1,
                            flexDirection: 'row',
                            borderBottomColor: color.grey_600,
                            borderBottomWidth: 1,
                            marginLeft: 25,
                            paddingVertical: 10,
                        }}>
                            <FlatList
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                data={this.state.selectedProv}
                                ListEmptyComponent={() => (
                                    <View
                                        style={{
                                            flex: 1,
                                            marginHorizontal: 10,
                                        }}>
                                        <Text style={{
                                            color: color.grey_900,
                                            // fontFamily: font.product_sans.regular
                                        }}>
                                            Belum ada provinsi yang dipilih
                                        </Text>
                                    </View>
                                )}
                                renderItem={({ item }) => (
                                    <View
                                        style={{
                                            flex: 1,
                                            marginHorizontal: 5,
                                            padding: 5,
                                            backgroundColor: color.blue_600,
                                            borderRadius: 5,
                                            flexDirection: 'row'
                                        }}>
                                        <Text style={{
                                            color: color.white
                                        }}>
                                            {item}
                                        </Text>
                                        <TouchableOpacity style={[
                                            mainStyle.ml_5
                                        ]} onPress={this.onRemoveProv.bind(this, item)}>
                                            <FeatherIcon
                                                name="x"
                                                size={16}
                                                color={color.white} />
                                        </TouchableOpacity>
                                    </View>
                                )}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </View>

                        <View style={[
                            mainStyle.mx_20,
                            mainStyle.mt_20
                        ]}>
                            <Text style={[
                                mainStyle.my_10,
                                mainStyle.font_bold,
                                mainStyle.f_15
                            ]}>Pilih penerima</Text>
                            <View style={[
                                mainStyle.row,
                                mainStyle.my_20,
                                mainStyle.justify_space_evenly
                            ]}>
                                <TouchableOpacity style={[
                                    this.state.gender == '2' ?
                                        sendStyle.tabButtonActive :
                                        sendStyle.tabButton
                                ]} onPress={this.selectAll}>
                                    <Text style={
                                        this.state.gender == '2' ?
                                            {
                                                color: color.white,
                                                fontWeight: 'bold'
                                            } :
                                            {
                                                color: color.grey_500,
                                                fontWeight: 'bold'
                                            }
                                    }>Semua</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={[
                                    this.state.gender == '0' ?
                                        sendStyle.tabButtonActive :
                                        sendStyle.tabButton
                                ]} onPress={this.selectMale}>
                                    <Text style={
                                        this.state.gender == '0' ?
                                            {
                                                color: color.white,
                                                fontWeight: 'bold'
                                            } :
                                            {
                                                color: color.grey_500,
                                                fontWeight: 'bold'
                                            }
                                    }>Laki-laki</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={[
                                    this.state.gender == '1' ?
                                        sendStyle.tabButtonActive :
                                        sendStyle.tabButton
                                ]} onPress={this.selectFemale}>
                                    <Text style={
                                        this.state.gender == '1' ?
                                            {
                                                color: color.white,
                                                fontWeight: 'bold'
                                            } :
                                            {
                                                color: color.grey_500,
                                                fontWeight: 'bold'
                                            }
                                    }>Perempuan</Text>
                                </TouchableOpacity>
                            </View>


                        </View>


                        <View style={[
                            mainStyle.mx_20,
                            mainStyle.mt_5,
                        ]}>
                            <Text style={[
                                mainStyle.my_10,
                                mainStyle.font_bold,
                                mainStyle.f_15
                            ]}>Isi pesan</Text>
                            <TextInput style={[
                                mainStyle.textInput,
                                mainStyle.pt_20,
                                mainStyle.pb_20
                            ]} placeholder="Isi pesan"

                                onChangeText={(isi) => this.setState({ isi })}
                                underlineColorAndroid='transparent'
                                value={this.state.isi}
                                multiline={true} />

                        </View>


                    </View>

                </KeyboardAwareScrollView>

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
    container: {
        backgroundColor: '#F5FCFF',
        flex: 1,
        paddingTop: 25
    },
    autocompleteContainer: {
        backgroundColor: '#ffffff',
        color: '#000000',
        fontSize: 17,
        height: 36,
        padding: 12,
        borderRadius: 5,
    },
    itemText: {
        fontSize: 15,
        margin: 2,
    },
    descriptionContainer: {
        // `backgroundColor` needs to be set otherwise the
        // autocomplete input will disappear on text input.
        backgroundColor: '#F5FCFF',
        marginTop: 8
    },
    infoText: {
        textAlign: 'center'
    },
    titleText: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'center'
    },
    directorText: {
        color: 'grey',
        fontSize: 12,
        marginBottom: 10,
        textAlign: 'center'
    },
    openingText: {
        textAlign: 'center'
    }
});
