import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF6E5',
        flex: 1
    },
    header: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center'
    },
    title: {
        flex: 1,
        textAlign: 'center',
        fontSize: 18,
        fontFamily: '600'
    },
    details: {
        margin: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar: {
        width: 60,
        height: 60,
        borderColor: '#7F3DFF',
        borderRadius: 30,
        borderWidth: 1.5,
        marginRight: 5,
        marginVertical: 30
    },
    name: {
        fontFamily: '600',
        textAlign: 'center',
        flex: 1,
        fontSize: 24,
        marginRight: 5,
    },
    buttons: {
        backgroundColor: 'white',
        margin: 18,
        borderRadius: 20
    }
})