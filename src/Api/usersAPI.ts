import {GetItemType, instance, APIResponseType} from "./api";

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 5) {
        return instance.get<GetItemType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    follow(userId: string) {
        return instance.post<APIResponseType>(`follow/${userId}`)
            .then(res => res.data)
    },
    unfollow(userId: string) {
        return instance.delete<APIResponseType>(`follow/${userId}`)
            .then(res => res.data)
    },
}

