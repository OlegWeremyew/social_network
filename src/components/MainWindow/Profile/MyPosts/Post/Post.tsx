import React, {useState} from 'react';
import style from "./Post.module.css"
import {PostType, ProfileActions} from "../../../../../redux/profileReducer";
import {useDispatch, useSelector} from "react-redux";
import {Nullable} from "../../../../../types/Nullable";
import {Undetectable} from "../../../../../types/Undetectable";
import {ReturnComponentType} from "../../../../../types/ReturnComponentType";
import {EMPTY_STRING} from "../../../../../constants";
import {getProfilePageProfilePhotosLargeSelector} from "../../../../../selectors";

const Post:React.FC<PostType> = (props): ReturnComponentType => {

    const dispatch = useDispatch()

    const [editMode, setEditMode] = useState<boolean>(false)
    const [fingerUp, setFingerUp] = useState<boolean>(false)

    const userAvatar: Nullable<Undetectable<string>> = useSelector(getProfilePageProfilePhotosLargeSelector)

    let heart = editMode ? style.active : style.notActive

    const statusChangeHandler = (): void => {
        setEditMode(!editMode)
    }

    const fingerUpChangeHandler = (): void => {
        setFingerUp(!fingerUp)
    }

    const deletePostHandler = (id: number): void => {
        dispatch(ProfileActions.deletePost(id))
    }

    return (
        <div className={style.item}>
            <div className={style.postAvatar}>
                <img
                    src={userAvatar ? userAvatar : EMPTY_STRING}
                    alt="ava"
                    title="ava"
                />
            </div>
            <div className={style.itemText}>
                {props.message}
                <div className={style.activeBlock}>
                    <span className={style.likeCounter} onClick={statusChangeHandler}>
                        like: {editMode ? props.likesCount + 1 : props.likesCount}
                        <span className={heart}>
                            &#9829;
                        </span>
                    </span>
                    <span className={style.likeCounter} onClick={fingerUpChangeHandler}>
                        respect:
                        {
                            !fingerUp
                                ? <span className={style.reaction}>&#128077;</span>
                                : <span className={style.reaction}>&#128526;</span>
                        }
                    </span>
                </div>
            </div>
            <div
                onClick={() => deletePostHandler(props.id)}
                className={style.delete__btn}
            >
                ❌
            </div>
        </div>
    )
}

export default Post