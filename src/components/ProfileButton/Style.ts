import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        padding: 18,
        flexDirection:'row',
        columnGap: 10,
        alignItems: 'center',
        borderBottomColor: 'rgba(0,0,0,0.1)',
        borderStyle: 'solid',
        borderBottomWidth: 1
    },
    icon: {
        backgroundColor: '#EEE5FF',
        padding: 10,
        borderRadius: 10
    },
    title:{
        flex: 1,
        textTransform: 'capitalize',
        fontFamily: '500',
        fontSize: 16
    },
    logout: {
        borderBottomWidth: 0
    },
    logoutIcon: {
        backgroundColor: '#FFE2E4'
    }
})