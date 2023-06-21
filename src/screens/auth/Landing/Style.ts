import {StyleSheet } from "react-native";
import { screenHeight, screenWidth } from "../../../utils/screenDimen";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    image: {
        width: screenWidth,
        height:screenHeight / 2
    }, content: {
        marginTop: 'auto',
        // paddingHorizontal: 20,
        width: screenWidth / 1.2,
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingVertical: 20
    }, 
    title: {
        fontSize: 30,
        fontFamily: '700',
    },
    description: {
        fontSize: 16,
        fontFamily: '400',
        marginVertical: 30
    },
    button: {
        backgroundColor: 'black',
        borderRadius: 5,
        padding: 0,
        width: screenWidth / 1.2,
        marginLeft: 'auto',
        marginRight: 'auto'
    }, buttonText: {
        color: 'white',
        paddingVertical: 8,
        fontFamily: '400',
        fontSize: 15,
    }
})