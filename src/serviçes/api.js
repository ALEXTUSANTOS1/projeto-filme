// Base da url https://api.themoviedb.org/3
// /movie/550?api_key=2da8d24e076100c0f370154b57f19da7

import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export default api;