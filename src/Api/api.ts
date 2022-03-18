import axios from "axios";
import {UserType} from "../redux/usersReducer";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "f5a121b3-d5d2-4866-a73a-ab1418f0e4d8",
    },
})

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10,
}


//types==========================

export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    resultCode: RC
    messages: string[]
}

export type GetItemType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}