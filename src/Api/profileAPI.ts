import {PhotosType, ProfileType} from "../redux/profileReducer";
import {instance, APIResponseType} from "./api";

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get<ProfileType>(`profile/${userId}`)
            .then(res => res.data)
    },
    getStatus(userId: string) {
        return instance.get<string>(`profile/status/${userId}`)
            .then(res => res.data)
    },
    updateStatus(status: string) {
        return instance.put<APIResponseType>(`profile/status`, {status})
            .then(res => res.data)
    },
    savePhoto(photoFile: File) {
        const formData = new FormData()
        formData.append("image", photoFile)
        return instance.put<APIResponseType<SavePhotoResponseDataType>>(`profile/photo`, formData, {
            headers: {
                "Content-Type": 'multipart/form-data'
            }
        })
            .then(res => res.data)
    },
    saveProfile(profile: ProfileType) {
        return instance.put<APIResponseType>(`profile`, profile).then(res => res.data)
    },
}

//types

type SavePhotoResponseDataType = {
    photos: PhotosType
}