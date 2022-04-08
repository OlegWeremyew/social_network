import {GetItemType, APIResponseType} from "./api";
import {instance} from "./instance";

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 5, term: string = "", friend: null | boolean = null) {
        return instance.get<GetItemType>(`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === null ? '' : `&friend=${friend}`) )
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

