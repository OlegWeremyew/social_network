import {instance} from "../apiConfig";
import {SavePhotoResponseDataType} from "./types";
import {APIResponseType} from "../types";
import {ProfileType} from "../../redux/profileReducer/types";

export const profileAPI = {
    getProfile(userId: string) {
        const endpoint = `profile/${userId}`
        return instance.get<ProfileType>(endpoint)
            .then(res => res.data)
    },
    getStatus(userId: string) {
        const endpoint = `profile/status/${userId}`
        return instance.get<string>(endpoint)
            .then(res => res.data)
    },
    updateStatus(status: string) {
        const endpoint = `profile/status`
        return instance.put<APIResponseType>(endpoint, {status})
            .then(res => res.data)
    },
    savePhoto(photoFile: File) {
        const endpoint = `profile/photo`
        const formData = new FormData()
        formData.append("image", photoFile)
        return instance.put<APIResponseType<SavePhotoResponseDataType>>(endpoint, formData, {
            headers: {
                "Content-Type": 'multipart/form-data'
            }
        })
            .then(res => res.data)
    },
    saveProfile(profile: ProfileType) {
        const endpoint = `profile`
        return instance.put<APIResponseType>(endpoint, profile).then(res => res.data)
    },
}
