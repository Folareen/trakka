import AsyncStorage from "@react-native-async-storage/async-storage"
import jwtDecode from "jwt-decode"
import api from "../api"

export const login = async (data: {emailAddress: string, password: string}, dispatch: (user: any) => void) => {
    try {
        const response = await api.post('login', data)
        const user = await jwtDecode(response.data.token)
        await AsyncStorage.removeItem('token')
        await AsyncStorage.setItem('token', response.data.token)
        dispatch(user)
    } catch (error: any) {
        throw new Error(error?.message || error)
    }
}


export const signup = async (data:  { fullname : string, username : string, emailAddress : string, password : string, accountBalance : string }, dispatch: (user: any) => void) => {
    try {
        const response = await api.post('signup', data)
        const user = await jwtDecode(response.data.token)
        await AsyncStorage.removeItem('token')
        await AsyncStorage.setItem('token', response.data.token)
        dispatch(user)
    } catch (error: any) {
        throw new Error(error?.message || error)
    }
}