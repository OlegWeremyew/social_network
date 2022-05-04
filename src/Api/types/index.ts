import {Nullable} from "../../types/Nullable";
import {ResultCodesEnum} from "../enums";
import {UserType} from "../../redux/usersReducer/types";

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