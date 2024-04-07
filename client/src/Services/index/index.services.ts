import axios from "axios";

export const url = axios.create({ 
    baseURL: "http://localhost:3001/api/v1/" ,
    headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")?.replace(/"/g, "")}`,
    }
});
