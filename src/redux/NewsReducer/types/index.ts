import {InferActionTypes} from "../../reduxStore";
import {initialNewsState} from "../NewsReducer/NewsReducer";
import {NewsActions} from "../NewsActions";

export type initialNewsStateType = typeof initialNewsState

export type ActionNewsTypes = InferActionTypes<typeof NewsActions>

export type NewsType = {
    id: string
    image: string
    text: string
    title: string
}

export type ImagesType = {
    imageForBackground: string
}
