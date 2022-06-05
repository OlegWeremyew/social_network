import {FilterType} from "../../../../../../redux/usersReducer/types";

export type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}

export type FriendFormType = 'true' | 'false' | 'null'

export type FormType = {
    term: string
    friend: FriendFormType
}