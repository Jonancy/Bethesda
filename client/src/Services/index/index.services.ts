import axios from "axios";

const baseURL = "http://localhost:3001/api/v1/";
const token = localStorage.getItem("token")?.replace(/"/g, "");

export const url = axios.create({ 
    baseURL: baseURL,
    headers: {
        "Authorization": `Bearer ${token}`,
    }
});



