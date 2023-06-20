import React, { useEffect, useState } from 'react'
import api from '../api'

const useFetch = (url: string, dependencies: any[]) => {
    const [data, setData] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    useEffect(() => {
        (
            async () => {
                try {
                    setLoading(true)
                    setError('')
                    const res = await api.get(url)
                    setData(res.data)
                } catch (error: any) {
                    setError(error.message)
                } finally {
                    setLoading(false)
                }
            }
        )()
    }, [...dependencies])

    return { data, loading, error }
}

export default useFetch