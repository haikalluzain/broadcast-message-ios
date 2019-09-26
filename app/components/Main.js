/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, Button} from 'react-native';
import { Async } from '../helper/AsyncStorage'
import Home from '../components/Home'
import Login from '../components/Login'

export default class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            login: '',
        }
    }

    componentDidMount(){
        Async.get("login").then((value) => {
            if (!value){
                this.setState({login:value})
            }
        })
    }

  render() {

    if (this.state.login){
        return <Home/>
    }else{
        return <Login />
    }    
  }
}
