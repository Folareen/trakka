import { StyleSheet } from "react-native";
import { screenWidth } from "../../utils/screenDimen";

const styles = StyleSheet.create({
    outerContainer: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        padding: 20,
        paddingTop: 60,
    },
    heading: {
        fontFamily: '700',
        marginBottom: 30,
        textAlign: 'center',
        color: '#7F3DFF'
    },
    input: {
        marginVertical: 10,
        fontSize: 17,
        fontFamily: '600'
    },
    inputC:{
        fontFamily: '400'
    },
    nav: {
        textAlign: 'right',
        color: 'darkblue',
        fontFamily: '500'
    },
    navContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        columnGap: 8,
        marginVertical: 15,
    },
    submitBtn: {
        backgroundColor: '#7F3DFF',
        borderRadius: 5,
        padding: 0,
        width: screenWidth - 40,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 30
    }, submitBtnText: {
        color: 'white',
        paddingVertical: 6,
        fontFamily: '500',
        fontSize: 17,
    },
    overlayContainer: {
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    overlayInner:{
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderRadius: 5,
        width: 60,
        paddingVertical: 10,
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    overlayInnerErr: {
        width: screenWidth / 1.3,
        paddingHorizontal: 10
    },
    overlayInnerErrText:{
        fontFamily: '500',
        color: 'red',
        fontSize: 16
    }
})

export default styles