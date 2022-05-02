import {instance} from "../apiConfig";
import {APIResponseType} from "../types";
import {LoginResponseDataType, MeResponseType} from "./types";
import {Nullable} from "../../types/Nullable";

export const authApi = {
    getAuth() {
        const endpoint = `auth/me`;
        return instance.get<APIResponseType<MeResponseType>>(endpoint)
            .then(res => res.data)
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: Nullable<string> = null) {
        const endpoint = `auth/login`;
        return instance.post<APIResponseType<LoginResponseDataType>>(endpoint, {email, password, rememberMe, captcha})
            .then(res => res.data)
    },
    logout() {
        const endpoint = `auth/login`;
        return instance.delete<APIResponseType>(endpoint)
            .then(res => res.data)
    },
}
