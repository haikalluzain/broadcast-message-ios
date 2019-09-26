import { StyleSheet } from 'react-native';
import { color } from '../colors'
import { font } from '../fonts'

export default StyleSheet.create({
    cardContainerStyle: {
        flex: 1,
        margin: 10,
        // width: 300,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
        borderRadius: 10,
    },
    faceImageStyle: {
        width: 65,
        height: 65
    },
    cardTextStyle: {
        color: color.grey_700,
        textAlign: "left",
    },
    badgeEmail: {
        backgroundColor: color.white,
        padding: 10,
        paddingHorizontal: 15,
        margin: 10,
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    tabButton: {
        backgroundColor: color.grey_200,
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 20
    },
    tabButtonActive: {
        backgroundColor: color.blue_600,
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    }

});