import React, {useState} from 'react';
import style from "./NewsItem.module.css";
import {NewsType} from "../../../../redux/NewsReducer";

export const NewsItem = ({news}: PropsType) => {

    const [text, setText] = useState<string>(news.text)
    const [editMode, setEditMode] = useState<boolean>(false)

    return (
        <div className={style.newsBlock__item}>
            <div className={style.newsBlock__itemBlock}>
                <img className={style.image}
                     src={news.image}
                     alt="news"
                />
            </div>
            <div className={style.main}>
                <div className={style.main__title}>
                    {news.title}
                </div>
                <div className={style.main__text}>
                    {text}
                </div>
                <button>
                    Edit Title
                </button>
                <button>
                    Edit Text
                </button>
                <button>
                    Delete
                </button>
                <button>
                    Add news
                </button>
            </div>
        </div>
    )
}

type PropsType = {
    news: NewsType
}
