import React from 'react';
import style from "./News.module.css"
import {NewsItem} from "./NewsItem/NewsItem";
import {useSelector} from "react-redux";
import {NewsType} from "../../../redux/NewsReducer";
import {AppStateType} from "../../../redux/reduxStore";
import {getIsFetching} from "../../../redux/usersSelectors";
import {Preloader} from "../../../common/Preloader/Preloader";

const News = () => {

    const newsArray = useSelector<AppStateType, NewsType[]>(state => state.news)
    const isFetching = useSelector<AppStateType, boolean>(getIsFetching)

    return (
        <div className={style.news}>
            {isFetching ? <Preloader/> : null}
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

