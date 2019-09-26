/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Dimensions,
  Alert,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView
} from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { Async } from '../helper/AsyncStorage'
import { color } from '../assets/colors'
import { font } from '../assets/fonts'
import homeStyle from '../assets/styles/home'
import mainStyle from '../assets/main'
import { SafeAreaView } from 'react-navigation'
import Shimmer from 'react-native-shimmer-placeholder'
import EmailScreen from './templates/EmailScreen'
import PushScreen from './templates/PushScreen'
import SmsScreen from './templates/SmsScreen'


export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabEmailActive: false,
      tabPushActive: false,
      tabSmsActive: false,
    }
  }

  componentDidMount() {
    this.setState({ tabEmailActive: true })
  }

  logout = () => {
    Alert.alert(
      'Logout?',
      'Are You Sure want to logout?',
      [
        {
          text: 'Yes', onPress: () => {
            Async.set("login", "false");
            Async.set("token", "");
            this.props.navigation.navigate('Login')


          }
        },
        { text: 'No', onPress: () => { } },
      ],
    );
  }

  renderElement() {
    if (this.state.tabEmailActive) {
      //Return the FirstScreen as a child to set in Parent View
      return <EmailScreen navigation={this.props.navigation} />;
    } else if (this.state.tabPushActive) {
      //Return the SecondScreen as a child to set in Parent View
      return <PushScreen navigation={this.props.navigation} />;
    } else {
      //Return the ThirdScreen as a child to set in Parent View
      return <SmsScreen navigation={this.props.navigation} />;
    }
  }

  showTemplateEmail = () => {
    this.setState({
      tabEmailActive: true,
      tabPushActive: false,
      tabSmsActive: false,
    })
  }

  showTemplatePush = () => {
    this.setState({
      tabEmailActive: false,
      tabPushActive: true,
      tabSmsActive: false,
    })
  }

  showTemplateSms = () => {
    this.setState({
      tabEmailActive: false,
      tabPushActive: false,
      tabSmsActive: true,
    })
  }


  render() {
    return (
      <SafeAreaView style={[mainStyle.flex]}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={color.white}
        />
        <ScrollView style={[mainStyle.flex]}>
          <View style={[
            mainStyle.row,
            mainStyle.p_20,
            mainStyle.justify_space_between,]}>
            <Text style={{
              fontSize: 20,
              fontWeight: 'bold',
              fontFamily: font.Nunito.regular,
              color: color.black
            }}>Home</Text>
            <TouchableOpacity onPress={this.logout} style={mainStyle.shadow}>
              <FeatherIcon name="log-out" size={20} color={color.black} />
            </TouchableOpacity>
          </View>

          <View style={[
            mainStyle.row,
            mainStyle.mx_30,
            mainStyle.my_20,
            mainStyle.justify_space_between,
            mainStyle.tabBar
          ]}>
            <TouchableOpacity style={[
              this.state.tabEmailActive ?
                homeStyle.tabButtonActive :
                homeStyle.tabButton
            ]} onPress={this.showTemplateEmail}>
              <Text style={
                this.state.tabEmailActive ?
                  {
                    color: color.white,
                    fontWeight: 'bold',
                    fontFamily: font.Nunito.regular
                  } :
                  {
                    color: color.grey_500,
                    fontWeight: 'bold',
                    fontFamily: font.Nunito.regular
                  }
              }>Email</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[
              this.state.tabPushActive ?
                homeStyle.tabButtonActive :
                homeStyle.tabButton
            ]} onPress={this.showTemplatePush}>
              <Text style={
                this.state.tabPushActive ?
                  {
                    color: color.white,
                    fontWeight: 'bold',
                    fontFamily: font.Nunito.regular

                  } :
                  {
                    color: color.grey_500,
                    fontWeight: 'bold',
                    fontFamily: font.Nunito.regular

                  }
              }>Notifications</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[
              this.state.tabSmsActive ?
                homeStyle.tabButtonActive :
                homeStyle.tabButton
            ]} onPress={this.showTemplateSms}>
              <Text style={
                this.state.tabSmsActive ?
                  {
                    color: color.white,
                    fontWeight: 'bold',
                    fontFamily: font.Nunito.regular

                  } :
                  {
                    color: color.grey_500,
                    fontWeight: 'bold',
                    fontFamily: font.Nunito.regular

                  }
              }>SMS</Text>
            </TouchableOpacity>
          </View>

          <View>
            {this.renderElement()}
          </View>


        </ScrollView>
      </SafeAreaView>
    );
  }
}

