import Axios, { AxiosInstance } from 'axios'

const api:AxiosInstance = Axios.create({
    baseURL: 'http://192.168.0.100:3002/api',
})


export const authorizaton = (token:string|null) => {
    return {
        headers: {
        'Authorization': `Bearer ${token}` 
        }
    }
}

export default api