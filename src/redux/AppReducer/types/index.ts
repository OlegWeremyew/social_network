import {InferActionTypes} from "../../reduxStore";
import {AppAction} from "../AppActions";
import {initialAppState} from "../AppReducer/AppReducer";

export type ActionAppReducerType = InferActionTypes<typeof AppAction>

export type initialStateAppType = typeof initialAppState