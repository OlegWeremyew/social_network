import {v1} from "uuid";
import {InferActionTypes} from "./reduxStore";

export enum NewsReducerEnum {
    ADD_NEWS = "SOCIAL_NETWORK/NEWS/ADD_POST",
    CHANGE_NEWS_TITLE = "SOCIAL_NETWORK/NEWS/CHANGE_NEWS_TITLE",
    CHANGE_NEWS_TEXT = "SOCIAL_NETWORK/NEWS/CHANGE_NEWS_TEXT",
    DELETE_NEWS = "SOCIAL_NETWORK/NEWS/DELETE_NEWS",
}

const initialState: NewsType[] = [
    {
        id: v1(),
        image: "https://s9.travelask.ru/system/images/files/000/336/893/wysiwyg_jpg/makro-fotografiya.jpg?1502197661",
        text: 'text',
        title: "df",
    },
    {
        id: v1(),
        image: "https://funart.pro/uploads/posts/2021-03/1617075044_6-p-oboi-krasota-russkoi-prirodi-7.jpg",
        text: 'stext',
        title: "df",
    },
    {
        id: v1(),
        image: "https://i.pinimg.com/originals/5a/df/1b/5adf1b97742a65d0a3c98299c545570b.jpg",
        text: 'text',
        title: "df",
    },
]

export const newsReducer = (state = initialState, action: ActionNewsTypes): initialStateType => {
    switch (action.type) {
        case NewsReducerEnum.ADD_NEWS: {
            return {...state}
        }
        case NewsReducerEnum.CHANGE_NEWS_TEXT: {
            return {...state}
        }
        case NewsReducerEnum.CHANGE_NEWS_TITLE: {
            return {...state}
        }
        case NewsReducerEnum.DELETE_NEWS: {
            return {...state}
        }
        default:
            return state
    }
}

export const NewsActions = {
    addNews: (newTitle: string, text: string) => {
        return {
            type: NewsReducerEnum.ADD_NEWS,
            payload: {
                newTitle,
                text,
            }
        } as const
    },
    changeNewsText: (id: string, text: string) => {
        return {
            type: NewsReducerEnum.CHANGE_NEWS_TEXT,
            payload: {
                id,
                text,
            }
        } as const
    },
    changeNewsTitle: (id: string, title: string) => {
        return {
            type: NewsReducerEnum.CHANGE_NEWS_TITLE,
            payload: {
                id,
                title,
            }
        } as const
    },
    deleteNews: (id: string) => {
        return {
            type: NewsReducerEnum.DELETE_NEWS,
            payload: {
                id,
            }
        } as const
    },
}

//types
export type initialStateType = typeof initialState

type ActionNewsTypes = InferActionTypes<typeof NewsActions>

export type NewsType = {
    id: string
    image: string
    text: string
    title: string
}
