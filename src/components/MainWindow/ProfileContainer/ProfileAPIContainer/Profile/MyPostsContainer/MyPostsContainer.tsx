import {connect} from "react-redux";
import {getProfilePageSelector} from "../../../../../../selectors";
import {ProfileActions} from "../../../../../../redux/profileReducer";
import {AppStateType} from "../../../../../../redux/types";
import {MapDispatchToProps, MapStateToPropsType} from "./types";
import {MyPosts} from "./MyPosts";

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profilePage: getProfilePageSelector(state)
    }
}

export const MyPostsContainer = connect<MapStateToPropsType, MapDispatchToProps, {}, AppStateType>(mapStateToProps, {
    onAddPost: ProfileActions.addPost
})(MyPosts)
