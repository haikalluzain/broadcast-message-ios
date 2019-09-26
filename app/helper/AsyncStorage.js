import { AsyncStorage } from 'react-native'

export const Async = {

    set: function (key, value) {
        AsyncStorage.setItem(key, value);
    },

    get: function (key){
        return AsyncStorage.getItem(key)
    },
    remove: function (key, value) {
        AsyncStorage.removeItem(key, value);
    }
}