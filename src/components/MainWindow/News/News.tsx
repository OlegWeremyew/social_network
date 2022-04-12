import React from 'react';
import style from "./News.module.css"
import {NewsItem} from "./NewsItem/NewsItem";
import {v1} from "uuid";

const News = () => {

    const newsArray: NewsType[] = [
        {id: v1(), image: "https://s9.travelask.ru/system/images/files/000/336/893/wysiwyg_jpg/makro-fotografiya.jpg?1502197661", text: 'text'},
        {id: v1(), image: "https://funart.pro/uploads/posts/2021-03/1617075044_6-p-oboi-krasota-russkoi-prirodi-7.jpg", text: 'stext'},
        {id: v1(), image: "https://i.pinimg.com/originals/5a/df/1b/5adf1b97742a65d0a3c98299c545570b.jpg", text: 'text'},
    ]

    return (
        <div className={style.news}>
            <h3 className={style.news__title}>News</h3>
            <div className={style.newsBlock}>
                {
                    newsArray.map(news => {
                        return (
                            <NewsItem key={news.id} news={news}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default News

//
export type NewsType = {
    id: string
    image: string
    text: string
}