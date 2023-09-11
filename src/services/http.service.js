import axios from "./../lib/axios";

export async function get(url, body) {
    try {
        const response = await axios.post(url, body);

        return response?.data;
    } catch (error) {        
        throw error;
    }
}

export async function post(url, body) {
    try {
        const response = await axios.post(url, body);

        return response.data;
    } catch (error) {        
        throw error;
    }
}
