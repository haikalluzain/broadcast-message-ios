import { StyleSheet } from 'react-native';
import { color } from '../colors'
import { font } from '../fonts'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.white,
    paddingLeft: 40,
    paddingRight: 40,
  },
  header: {
    fontSize: 24,
    fontFamily: font.Nunito.regular,
    marginBottom: 60,
    color: color.black,
    fontWeight: 'bold',

  },  
  textInput: {
    alignSelf: 'stretch',
    fontFamily: font.Nunito.regular,
    padding: 16,
    marginBottom: 20,
    borderRadius: 10,
    color: color.grey_700,
    backgroundColor: color.grey_200,
    fontSize: 16,
  },
  btnLogin: {
    alignSelf: 'stretch',
    color: color.white,
    backgroundColor: color.blue_500,
    fontSize: 25,
    padding: 20,
    alignItems: 'center',
    borderRadius: 10,
  },
  btnLoginText: {
    color: color.white,
    fontSize: 20,
    fontFamily: font.Nunito.regular,
    fontWeight: '600',
    fontStyle: 'normal'
  }

});