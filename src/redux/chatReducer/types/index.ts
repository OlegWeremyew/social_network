import {BaseThunkType, InferActionTypes} from "../../reduxStore";
import {ChatMessageAPIType} from "../../../pages/Chat/ChatPage";
import {chatActions} from "../chatActions";
import {initialChatState} from "../chatReducer/chatReducer";

export type ThunkType = BaseThunkType<ActionChatTypes>

export type initialStateType = typeof initialChatState

export type ActionChatTypes = InferActionTypes<typeof chatActions>

export type ChatMessageType = ChatMessageAPIType & {id: string}
