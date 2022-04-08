import React, {useEffect} from 'react';
import {Messages} from "./Messages/Messages";
import {AddMessageForm} from "./AddMessageForm/AddMessageForm";

export const Chat: React.FC = () => {

    return (
        <>
            <Messages/>
            <AddMessageForm/>
        </>
    )
}

