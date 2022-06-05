import {initialStateProfileType} from "../../../../../../../redux/profileReducer/types";

export type UsersPropsType = MapStateToPropsType & MapDispatchToProps

export type MapStateToPropsType = {
    profilePage: initialStateProfileType
}

export type MapDispatchToProps = {
    onAddPost: (newPostText: string) => void
}