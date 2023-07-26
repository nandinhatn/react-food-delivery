import axios from 'axios';
const api = axios.create({
    baseURL: "http://189.126.111.155:21222"
})
export default api;