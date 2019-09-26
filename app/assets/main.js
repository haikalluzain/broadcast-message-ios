import { StyleSheet } from 'react-native';
import { color } from './colors'
import { font } from './fonts'

export default StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    flex: { flex: 1 },
    column: { flexDirection: 'column' },
    row: { flexDirection: 'row' },
    align_center: {
        alignItems: 'center'
    },

    // Justify Content
    justify_center: { justifyContent: 'center' },
    justify_flex_start: { justifyContent: 'flex-start' },
    justify_flex_end: { justifyContent: 'flex-end' },
    justify_space_around: { justifyContent: 'space-around' },
    justify_space_between: { justifyContent: 'space-between' },
    justify_space_evenly: { justifyContent: 'space-evenly' },

    // Padding
    p_5: { padding: 5 },
    p_10: { padding: 10 },
    p_20: { padding: 20 },
    p_30: { padding: 30 },
    p_40: { padding: 40 },
    p_50: { padding: 50 },

    px_5 : { paddingHorizontal: 5 },
    px_10 : { paddingHorizontal: 10 },
    px_20 : { paddingHorizontal: 20 },
    px_30 : { paddingHorizontal: 30 },
    px_40 : { paddingHorizontal: 40 },
    px_50 : { paddingHorizontal: 50 },

    py_5 : { paddingVertical: 5 },
    py_10 : { paddingVertical: 10 },
    py_20 : { paddingVertical: 20 },
    py_30 : { paddingVertical: 30 },
    py_40 : { paddingVertical: 40 },
    py_50 : { paddingVertical: 50 },

    pt_5 : { paddingTop: 5 },
    pt_10 : { paddingTop: 10 },
    pt_20 : { paddingTop: 20 },
    pt_30 : { paddingTop: 30 },
    pt_40 : { paddingTop: 40 },
    pt_50 : { paddingTop: 50 },

    pb_5 : { paddingBottom: 5 },
    pb_10 : { paddingBottom: 10 },
    pb_20 : { paddingBottom: 20 },
    pb_30 : { paddingBottom: 30 },
    pb_40 : { paddingBottom: 40 },
    pb_50 : { paddingBottom: 50 },
    
    // Margin
    m_0: { margin: 0 },
    m_5: { margin: 5 },
    m_10: { margin: 10 },
    m_20: { margin: 20 },
    m_30: { margin: 30 },
    m_40: { margin: 40 },
    m_50: { margin: 50 },

    mr_5: { marginRight: 5 },
    mr_10: { marginRight: 10 },
    mr_20: { marginRight: 20 },
    mr_30: { marginRight: 30 },
    mr_40: { marginRight: 40 },
    mr_50: { marginRight: 50 },

    ml_5: { marginLeft: 5 },
    ml_10: { marginLeft: 10 },
    ml_20: { marginLeft: 20 },
    ml_30: { marginLeft: 30 },
    ml_40: { marginLeft: 40 },
    ml_50: { marginLeft: 50 },

    mt_0: { marginTop: 0 },
    mt_5: { marginTop: 5 },
    mt_10: { marginTop: 10 },
    mt_20: { marginTop: 20 },
    mt_30: { marginTop: 30 },
    mt_40: { marginTop: 40 },
    mt_50: { marginTop: 50 },

    mb_0: { marginBottom: 0 },
    mb_5: { marginBottom: 5 },
    mb_10: { marginBottom: 10 },
    mb_20: { marginBottom: 20 },
    mb_30: { marginBottom: 30 },
    mb_40: { marginBottom: 40 },
    mb_50: { marginBottom: 50 },
    

    mx_0 : { marginHorizontal: 0 },
    mx_5 : { marginHorizontal: 5 },
    mx_10 : { marginHorizontal: 10 },
    mx_20 : { marginHorizontal: 20 },
    mx_30 : { marginHorizontal: 30 },
    mx_40 : { marginHorizontal: 40 },
    mx_50 : { marginHorizontal: 50 },

    my_0 : { marginVertical: 0 },
    my_5 : { marginVertical: 5 },
    my_10 : { marginVertical: 10 },
    my_20 : { marginVertical: 20 },
    my_30 : { marginVertical: 30 },
    my_40 : { marginVertical: 40 },
    my_50 : { marginVertical: 50 },

    f_10: {
        fontSize: 10,
    },
    f_15: {
        fontSize: 15,
    },
    f_20: {
        fontSize: 20,
    },
    f_25: {
        fontSize: 25,
    },
    f_30: {
        fontSize: 30,
    },

    font_bold: {
        fontWeight: 'bold'  
    },
    toolbar: {
        borderBottomColor: color.grey_300,
        borderBottomWidth: 1,
    },
    shadow: {
        // backgroundColor: color.white,
        shadowColor: "#000",
        shadowOffset: {
            width: -2,
            height: 2,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },

    shadow_bottom: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },

    textInput: {
        alignSelf: 'stretch',
        padding: 16,
        borderRadius: 10,
        color: color.grey_800,
        backgroundColor: color.grey_200,
        fontSize: 16,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2896d3',
        paddingLeft: 40,
        paddingRight: 40,
    },
    header: {
        fontSize: 24,
        marginBottom: 60,
        color: '#fff',
        fontWeight: 'bold',

    },
    btn: {
        alignSelf: 'stretch',
        backgroundColor: color.green_900,
        padding: 20,
        alignItems: 'center',
    }
    ,
    cardContainerStyle: {
        flex: 1,
        margin: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        padding: 10,
        elevation: 4,
        borderRadius: 10,
    },
    faceImageStyle: {
        width: 65,
        height: 65
    },
    cardTextStyle: {
        color: color.grey_700,
        textAlign: "left",
        // fontFamily: font.product_sans.regular
    },
    TextInputStyle: {
        textAlign: 'center',
        marginBottom: 7,
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#bbb',
        fontSize: 15
    },
    formInput: {
        margin: 20,
    }, logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    logo: {
        width: 128,
        height: 56,
    },
    title: {
        color: '#f7c744',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 5,
        opacity: 0.9
    },
    infoContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 200,
        padding: 20,
        // backgroundColor: 'red'
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: '#FFF',
        marginBottom: 20,
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#f7c744',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: 'rgb(32, 53, 70)',
        fontWeight: 'bold',
        fontSize: 18
    },
    tabBar: {
        backgroundColor: color.grey_200,
        borderRadius: 30
    }

});