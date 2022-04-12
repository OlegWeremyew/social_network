import React, {useState} from 'react';
import style from "./Post.module.css"
import {PostType} from "../../../../../redux/profileReducer";

const Post = (props: PostType) => {

    const [editMode, setEditMode] = useState<boolean>(false)

    let heart = editMode ? style.active : ""

    const statusChangeHandler = () => {
        setEditMode(!editMode)
    }

    return (
        <div className={style.item}>
            <div className={style.postAvatar}>
                <img
                    src="https://slovami.net/wp-content/uploads/thumbs_dir/the-most-beautiful-guys-russia-4-1-nwkkkydf2f1mhw9a4ijzfs2ktasvevyjiyi4xibqis.jpg"
                    alt="ava" title="ava"/>
            </div>
            <div className={style.itemText}>
                {props.message}
                <div>
                    <span className={style.likeCounter} onClick={statusChangeHandler}>
                        like: {editMode ? props.likesCount + 1 : props.likesCount }
                        <span className={heart}>
                            &#9829;
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Post