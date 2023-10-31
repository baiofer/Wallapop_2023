import { sparrestApi } from "../utils/sparrestApi.js"

export const loginUser = async (email, password) => {
    const url = 'http://localhost:8000/auth/login'
    const body = {
        username: email,
        password: password
    }

    return sparrestApi().post("auth/login", body)
}