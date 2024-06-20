import { createApi } from "@reduxjs/toolkit/query/react";
import axios, {AxiosError, AxiosRequestConfig} from "axios"

export const API_URL = 'https://pokeapi.co/api/v2/'

export const API = axios.create({baseURL: API_URL})

const DEFAULT_ERROR_MESSAGE = "Unexpected server error occurred. Please try again later."

interface BaseQueryArgs extends AxiosRequestConfig {
    url: string
    method: AxiosRequestConfig['method']
    params?: AxiosRequestConfig['params']
    body?: AxiosRequestConfig['data']
}

async function baseQuery(
    { url, method, params, body, ...rest }: BaseQueryArgs
): Promise<{ data?: any, error?: string }> {
    try {
        const result = await API({ url, method, params, data: body, ...rest })
        return { data: result.data }
    } catch (error) {
        const axiosError = error as AxiosError
        if (axiosError?.response?.status === 422) return { error: "Schema error." }
        if (axiosError?.response?.data?.detail) return { error: axiosError.response.data.detail }
        console.log(axiosError)
        return { error: DEFAULT_ERROR_MESSAGE }
    }
}

const baseApi = createApi({
    reducerPath: 'api',
    baseQuery,
    endpoints: () => ({}),
})

export default baseApi
