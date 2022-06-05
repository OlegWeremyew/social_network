import {NewsReducerEnum} from "../constants";
import {NewsType} from "../types";

export const NewsActions = {
    addNews: (newTitle: string) => {
        return {
            type: NewsReducerEnum.ADD_NEWS,
            payload: {
                newTitle
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
    setHistoryFromSessionStorage(list: NewsType[]) {
        return {
            type: NewsReducerEnum.SET_HISTORY_FROM_SESSION_STORAGE,
            payload: {
                list,
            },
        } as const;
    },
}