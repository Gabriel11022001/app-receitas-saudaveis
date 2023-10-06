import axios from "axios";

const service = axios.create({
    baseURL: 'http://receitas-saudaveis.tecnologia.ws/index.php'
});

export default service;