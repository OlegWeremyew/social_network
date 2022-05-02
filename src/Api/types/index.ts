import {UserType} from "../../redux/usersReducer";
import {Nullable} from "../../types/Nullable";
import {ResultCodesEnum} from "../enums";

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