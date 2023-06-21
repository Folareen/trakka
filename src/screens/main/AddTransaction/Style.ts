import { StyleSheet } from "react-native";
import { screenWidth } from "../../../utils/screenDimen";

export const styles = StyleSheet.create({
    container: { backgroundColor: '#FFF6E5', flex: 1 },
    header: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center'
    },
    backBtn: {

    },
    title: {
        flex: 1,
        textAlign: 'center',
        fontSize: 18,
        fontFamily: '600'
    },
    // dropdownsContainer: {
    //     flexDirection: 'row',
    //     marginTop: 25,
    //     marginBottom: 15,
    //     marginHorizontal: 15,
    //     columnGap: 10
    // },
    dropdown: {
        borderColor: '#02021A',
        borderWidth: 1,
        borderStyle: 'solid',
        padding: 10,
        borderRadius: 40,
        backgroundColor: 'transparent',
        width: screenWidth / 1.1,
        marginVertical: 15
    },
    dropdownText: {
        fontFamily: '600',
        fontSize: 15,
        textTransform: 'capitalize'
    },
    rowText: {
        fontFamily: '500',
        fontSize: 14,
        textTransform: 'capitalize'
    },
    selectedRow: {
        backgroundColor: 'rgba(0,0,0,0.1)'
    },
    selectedRowText: {
        fontFamily: '600'
    },
    form: {
        marginHorizontal: 20,
        paddingTop: 10
    },
    input: {
        marginVertical: 15,
        fontSize: 17,
        fontFamily: '600'
    },
    inputC: {
        fontFamily: '400'
    },
    types: {
        flexDirection: 'row',
        columnGap: 10,
        marginVertical: 15,
        alignItems: 'center'
    },
    date: {
        padding: 15,
        marginVertical: 15,
        borderColor: 'rgba(0,0,0,0.4)',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 5,
        backgroundColor: 'rgba(0,0,0,0.05)'
    },
    type: {
        flex: 1,
        alignItems: 'center',
        padding: 15,
        borderRadius: 10
    },
    selectedType: {
        borderColor: '#7F3DFF',
        borderWidth: 3,
        borderStyle: 'solid',
    },
    typeText: {
        fontFamily: '500',
        color: 'white',
        fontSize: 16
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
    overlayInner: {
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderRadius: 5,
        width: 60,
        paddingVertical: 15,
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    overlayInnerErr: {
        width: screenWidth / 1.3,
        paddingHorizontal: 10,
    },
    overlayInnerErrText: {
        fontFamily: '500',
        color: 'red',
        fontSize: 18,
        textAlign: 'center'
    }
})