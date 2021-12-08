import axios from "axios";


const api = axios.create({
    baseURL:"https://localhost:4000",
    headers: {'X-Powered-By': 'Express','Content-Type':'application/json; charset=utf-8'}
});

export default api;



