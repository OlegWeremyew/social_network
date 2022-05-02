import React, {ChangeEvent, useEffect, useState} from 'react';
import {ReturnComponentType} from "../../../../../types/ReturnComponentType";

type ProfileStatusType = {
    status: string
    updateUserStatus: (status: string) => void
}

export const ProfileStatusWithHooks:React.FC<ProfileStatusType> = (props): ReturnComponentType => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = (): void => {
        setEditMode(true)
    }
    const deactivateEditMode = (): void => {
        setEditMode(false)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setStatus(e.currentTarget.value)
        props.updateUserStatus(status)
    }

    return (
        <div>
            {!editMode &&
            <div>
               <b>Status:</b> <span onDoubleClick={activateEditMode}>{props.status || "------"}</span>
            </div>}
            {editMode &&
            <div>
                <input
                    onChange={e => onStatusChange(e)}
                    autoFocus
                    value={status}
                    onBlur={deactivateEditMode}
                />
            </div>}
        </div>
    );
};
