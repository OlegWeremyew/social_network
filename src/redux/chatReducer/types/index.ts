import {chatActions} from "../chatActions";
import {initialChatState} from "../chatReducer/chatReducer";
import {BaseThunkType, InferActionTypes} from "../../types";
import {ChatMessageAPIType} from "../../../pages/Chat/types";

export type ThunkType = BaseThunkType<ActionChatTypes>

export type initialStateType = typeof initialChatState

export type ActionChatTypes = InferActionTypes<typeof chatActions>

export type ChatMessageType = ChatMessageAPIType & {id: string}
