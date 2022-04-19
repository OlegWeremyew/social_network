import React, {useState} from 'react';
import style from "./Post.module.css"
import {PostType} from "../../../../../redux/profileReducer";

const Post = (props: PostType) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [fingerUp, setFingerUp] = useState<boolean>(false)

    let heart = editMode ? style.active : style.notActive

    const statusChangeHandler = () => {
        setEditMode(!editMode)
    }

    const fingerUpChangeHandler = () => {
        setFingerUp(!fingerUp)
    }

    return (
        <div className={style.item}>
            <div className={style.postAvatar}>
                <img
                    src="https://slovami.net/wp-content/uploads/thumbs_dir/the-most-beautiful-guys-russia-4-1-nwkkkydf2f1mhw9a4ijzfs2ktasvevyjiyi4xibqis.jpg"
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
        </div>
    )
}

export default Post