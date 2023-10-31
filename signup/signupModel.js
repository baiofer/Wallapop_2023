import { sparrestApi } from "../utils/sparrestApi.js"

export const createUser = async (email, password) => {
    const url = 'http://localhost:8000/auth/register'

    const body = {
        username: email,
        password: password
    }

    sparrestApi().post("auth/register", body)

}