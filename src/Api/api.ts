import {UserType} from "../redux/usersReducer";
import {Nullable} from "../types/Nullable";

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
    error: Nullable<string>
}