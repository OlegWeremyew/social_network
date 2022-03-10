import axios from "axios";
import {ProfileType} from "../redux/profileReducer";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "f5a121b3-d5d2-4866-a73a-ab1418f0e4d8",
    },
});

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId: string) {
        return instance.post(`follow/${userId}`).then(response => response.data)
    },
    unfollow(userId: string) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    },
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status})
    },
    savePhoto(photoFile: File) {

        const formData = new FormData()
        formData.append("image", photoFile)

        return instance.put(`profile/photo`, formData, {
            headers: {
                "Content-Type": 'multipart/form-data'
            }
        })
    },
    saveProfile(profile: ProfileType) {
        return instance.put(`profile`, profile).then(res => res.data);
    }
}

export const authApi = {
    getAuth() {
        return instance.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    },
}
