import api from "../api"

export const getTransactions = async () => {
    try {
        const response = await api.get('transaction')
        return response.data
    } catch (error: any) {
        throw new Error(error?.message || error)
    }
}

export const deleteTransaction = async (id: string) => {
    try {
        await api.delete(`transaction/${id}`)
    } catch (error: any) {
        throw new Error(error?.message || error)
    }
}

export const addTransaction = async (data: { amount: number, type: string, category: string, date: string | Date, description: string }) => {
    try {
        await api.post('transaction', data)
    } catch (error: any) {
        throw new Error(error?.message || error)
    }
}

export const editTransaction = async (data: { amount: number, type: string, category: string, date: string | Date, description: string }, id: string) => {
    try {
        await api.patch(`transaction/${id}`, data)
    } catch (error: any) {
        throw new Error(error?.message || error)
    }
}