import axios from "axios";
import {ProfileType} from "../redux/profileReducer";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "f5a121b3-d5d2-4866-a73a-ab1418f0e4d8",
    },
});

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10,
}

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId: string) {
        return instance.post(`follow/${userId}`).then(response => response.data)
            .then(response => response.data)
    },
    unfollow(userId: string) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
            .then(response => response.data)
    },
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
            .then(response => response.data)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status})
            .then(response => response.data)
    },
    savePhoto(photoFile: File) {
        const formData = new FormData()
        formData.append("image", photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                "Content-Type": 'multipart/form-data'
            }
        })
            .then(response => response.data)
    },
    saveProfile(profile: ProfileType) {
        return instance.put(`profile`, profile).then(res => res.data)
    },
}

export const authApi = {
    getAuth() {
        return instance.get<MeResponseType>(`auth/me`)
            .then(res => res.data)
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: null | string = null) {
        return instance.post<LoginResponseType>(`auth/login`, {email, password, rememberMe, captcha})
            .then(res => res.data)
    },
    logout() {
        return instance.delete(`auth/login`)
            .then(res => res.data)
    },
}

export const securityApi = {
    getCaptchaUrl() {
        return instance.get<captchaType>(`security/get-captcha-url`)
            .then(res => res.data)
    },
}


//types

type captchaType = {
    url: string
}

type MeResponseType = {
    data: dataAuthMeType
    resultCode: ResultCodesEnum
    messages: string[]
}

type LoginResponseType = {
    data: { userId: number }
    resultCode: ResultCodesEnum
    messages: string[]
}

type dataAuthMeType = {
    id: string
    email: string
    login: string
}

