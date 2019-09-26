import axios from 'axios'

export const BASE_URL = "https://api-broadcast.ved.carsworld.id/api/"

export default class API {

    static async post(url, data) {
        const res = await axios.post(url, data)
        return await res.data
    }

    static async get(url, data) {
        const res = await axios.get(url, data)
        return await res.data
    }

}
