/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

// import Stack from 'react-router-native-stack';
import { NativeRouter , Route } from 'react-router-native';
import Stack from 'react-router-native-stack';

import Splash from './app/components/Splash'
import Main from './app/components/Main'
import Home from './app/components/Home'
import Login from './app/components/Login'


import EmailScreen from './app/components/templates/EmailScreen'
import PushScreen from './app/components/templates/PushScreen'
import SmsScreen from './app/components/templates/SmsScreen'
import SendEmail from './app/components/pages/SendEmail'
import SendNotif from './app/components/pages/SendNotif'
import SendSms from './app/components/pages/SendSms'

// import { fromLeft, fadeIn, flipX, flipY, fromBottom, fromRight,fromTop,zoomIn,zoomOut } from 'react-navigation-transitions';
console.disableYellowBox=(true);

class App extends Component {
  render() {
    return (
      <Activity/>

      // <NativeRouter>
      //   <Stack>
      //     <Route exact path="/" animationType="slide-horizontal" component={Splash}/>
      //     <Route exact path="/Login" animationType="slide-horizontal" component={Login}/>
      //     <Route exact path="/Home" animationType="slide-horizontal" component={Home}/>
      //     <Route exact path="/EmailScreen" animationType="slide-horizontal" component={EmailScreen}/>
      //     <Route exact path="/SendEmail" animationType="slide-horizontal" component={SendEmail}/>
      //   </Stack>
      // </NativeRouter>
    );
  }
}

const Activity = createStackNavigator({
  Splash: {
    screen:Splash,
    navigationOptions: {
      header: null,
      gesturesEnabled: false
    }
  },
  Home: {
    screen:Home,
    navigationOptions: {
      header: null,
      gesturesEnabled: false
    }
  },
  
  Login: {
    screen:Login,
    navigationOptions: {
      header: null,
      gesturesEnabled: false
    }
  },
  
  Main: {
    screen:Main,
    navigationOptions: {
      header: null,
      gesturesEnabled: false
    }
  },
  EmailScreen: {
    screen:EmailScreen,
    navigationOptions: {
      header: null,
      gesturesEnabled: false
    }
  },
  PushScreen: {
    screen:PushScreen,
    navigationOptions: {
      header: null,
      gesturesEnabled: false
    }
  },
  SmsScreen: {
    screen:SmsScreen,
    navigationOptions: {
      header: null,
      gesturesEnabled: false
    }
  },
  SendEmail: {
    screen:SendEmail,
    navigationOptions: {
      header: null,
      gesturesEnabled: false
    }
  },
  SendNotif: {
    screen:SendNotif,
    navigationOptions: {
      header: null,
      gesturesEnabled: false
    }
  },
  SendSms: {
    screen:SendSms,
    navigationOptions: {
      header: null,
      gesturesEnabled: false
    }
  },
},

)

const MainApp = createAppContainer(Activity);

export default MainApp;
