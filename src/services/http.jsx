import axios from "axios";

const http = axios.create({
    baseURL: 'http://localhost:444'
});

export default http;