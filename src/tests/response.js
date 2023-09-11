import { get } from "../services/http.service"

const testResponse = async () => {
    try {
        const data = await get('/test');

        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}

testResponse();