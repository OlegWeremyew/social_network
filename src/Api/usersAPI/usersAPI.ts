import {instance} from "../apiConfig";
import {APIResponseType, GetItemType} from "../types";
import {Nullable} from "../../types/Nullable";

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 5, term: string = "", friend: Nullable<boolean> = null) {
        const endpoint = `users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === null ? '' : `&friend=${friend}`)
        return instance.get<GetItemType>(endpoint)
            .then(res => res.data)
    },
    follow(userId: string) {
        const endpoint = `follow/${userId}`
        return instance.post<APIResponseType>(endpoint)
            .then(res => res.data)
    },
    unfollow(userId: string) {
        const endpoint = `follow/${userId}`
        return instance.delete<APIResponseType>(endpoint)
            .then(res => res.data)
    },
}

