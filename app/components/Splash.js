/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, Button,Image} from 'react-native';
import { Async } from '../helper/AsyncStorage'
import { color } from '../assets/colors'
import { font } from '../assets/fonts'

export default class Splash extends Component {
    constructor(props){
        super(props)
        this.state = {
            redirect: "",
        }
    }

    componentDidMount(){
        setTimeout(() => {
            Async.get("login").then((login) => {
                console.log(login)
                if (login == "true"){
                    this.props.navigation.navigate("Home")
                }else{
                    this.props.navigation.navigate("Login")
                }
            })
          }, 2500);
    }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={color.blue_500}
        barStyle="light-content"/>
         
       <Text style={styles.welcome}>BroadCast</Text>
       <Text style={{color:'#fff',marginLeft:100}}>carsworld</Text>
      
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.blue_500,
  },
  welcome: {
    fontSize: 40,
    fontWeight: '500',
    textAlign: 'center',
    margin: 10,
    color: '#F5FCFF',
    fontFamily: font.Nunito.regular
  },
  instructions: {
    textAlign: 'center',
    color: '#F5FCFF',
    marginBottom: 5,
  },
});
