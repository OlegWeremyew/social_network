import {AppAction} from "../AppActions";
import {initialAppState} from "../AppReducer/AppReducer";
import {InferActionTypes} from "../../types";

export type ActionAppReducerType = InferActionTypes<typeof AppAction>

export type initialStateAppType = typeof initialAppState