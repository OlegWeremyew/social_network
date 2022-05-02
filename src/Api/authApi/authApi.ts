import {instance} from "../apiConfig";
import {APIResponseType} from "../types";
import {LoginResponseDataType, MeResponseType} from "./types";


export const authApi = {
    getAuth() {
        return instance.get<APIResponseType<MeResponseType>>(`auth/me`)
            .then(res => res.data)
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: null | string = null) {
        return instance.post<APIResponseType<LoginResponseDataType>>(`auth/login`, {email, password, rememberMe, captcha})
            .then(res => res.data)
    },
    logout() {
        return instance.delete<APIResponseType>(`auth/login`)
            .then(res => res.data)
    },
}
