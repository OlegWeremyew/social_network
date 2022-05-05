import {ProfileType} from "../../../../../../redux/profileReducer/types";

export type ProfileEditPropsType = {
    editMode: boolean
    profile: ProfileType
    onSubmit: any
    isOwner: boolean
    setEditModeHandler: () => void
    disableViewMode: () => void
}