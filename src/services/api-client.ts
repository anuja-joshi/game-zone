import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '8703004e68c64cc5913dc00471a373b2'
    }
})