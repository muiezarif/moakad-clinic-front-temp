import axios from "axios"

export default axios.create({
    // baseURL:"https://novamdigital.com/api/v1"
    baseURL:"http://localhost:8800/api"
    // baseURL:"https://api.courtena.com/api"
});