import { post } from "./http.service";

export async function login({email, password}) {
    try {
        console.log({email, password});
    } catch (error) {
        console.error({error});
    }
}
