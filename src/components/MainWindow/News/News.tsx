import React, {useState} from 'react';
import style from "./News.module.css"

import {NewsItem} from "./NewsItem/NewsItem";
import {useDispatch, useSelector} from "react-redux";
import {NewsActions, NewsType} from "../../../redux/NewsReducer";
import {AppStateType} from "../../../redux/reduxStore";
import {getIsFetching} from "../../../redux/usersSelectors";
import {Preloader} from "../../../common/Preloader/Preloader";

const News = () => {

    const dispatch = useDispatch()

    const [activateAddMode, setActivateAddMode] = useState<boolean>(false)
    const newsArray = useSelector<AppStateType, NewsType[]>(state => state.news.news)
    const isFetching = useSelector<AppStateType, boolean>(getIsFetching)

    const activateAddModeHandler = () => {
        setActivateAddMode(!activateAddMode)
    }

    const addNews = (title: string) => {
        dispatch(NewsActions.addNews(title))
    }

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
            {
                activateAddMode
                    ? (
                        <div className={style.button__group}>
                            <input type="text" onChange={(e)=>addNews(e.currentTarget.value)}/>
                            <div className={style.form__btn} onClick={activateAddModeHandler}>
                                <button>Save</button>
                            </div>
                            <div className={style.form__btn} onClick={activateAddModeHandler}>
                                <button>Cancel</button>
                            </div>
                        </div>
                    ) : (
                        <div className={style.form__btn} onClick={activateAddModeHandler}>
                            <button>Add new news</button>
                        </div>
                    )
            }

        </div>
    )
}

export default News

