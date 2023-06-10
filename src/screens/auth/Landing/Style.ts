import { Dimensions, StyleSheet } from "react-native";
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
        paddingHorizontal: 35,
        paddingVertical: 30
    }, 
    title: {
        fontSize: 30,
        fontFamily: '700'
    },
    description: {
        fontSize: 16,
        fontFamily: '400',
        marginVertical: 30
    },
    button: {
        backgroundColor: 'black',
        borderRadius: 5,
        padding: 0
    }, buttonText: {
        color: 'white',
        paddingVertical: 10,
        fontFamily: '400',
        fontSize: 15,
    }
})