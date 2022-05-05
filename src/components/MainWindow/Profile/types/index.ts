import {ProfileType} from "../../../../redux/profileReducer/types";
import {Nullable} from "../../../../types/Nullable";
import {InjectedProps} from "../../../../utils/hoc/withRouter/types";

//ProfileContainer=======
export type MapStateToPropsProfileType = {
    profile: ProfileType
    isAuth: boolean
    status: string
    authorizedUserID: Nullable<string>
}

export type MapDispatchToProps = {
    getUserProfile: (userId: Nullable<string>) => void
    getUserStatus: (userId: Nullable<string>) => void
    updateUserStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (formData: ProfileType) => Promise<any>
}

export type ProfileContainerPropsType = MapStateToPropsProfileType & MapDispatchToProps & InjectedProps

//Profile=========

export type ProfilePropsType = {
    profile: ProfileType
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (formData: ProfileType) => Promise<any>
}
