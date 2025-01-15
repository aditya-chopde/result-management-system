import axios from "axios"

const api = axios.create({
    baseURL: "https://result-backend-j3x7.onrender.com"
})

export default api;