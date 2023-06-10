import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 2
    }, content: {

    }
})