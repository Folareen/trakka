import api from "../api"

export const getTransactions = async () => {
    try {
        const response = await api.get('transaction')
        return response.data
    } catch (error: any) {
        throw new Error(error?.message || error)
    }
}

export const deleteTransaction = async (id:string) => {
    try {
        await api.delete(`transaction/${id}`)
    } catch (error: any) {
        throw new Error(error?.message || error)
    }
}