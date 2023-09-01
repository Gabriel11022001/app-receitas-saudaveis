import axios from "axios";

const service = axios.create({
    baseURL: 'http://10.172.206.38:8000/api'
});

export default service;