import React, {ChangeEvent} from 'react';
import style from './ProfileStatus.module.css'

export class ProfileStatus extends React.Component<ProfileStatusType> {

    state: stateType = {
        editMode: false,
        status: this.props.status,
        isOwner: this.props.isOwner,
    }

    activateEditMode = () => {
        this.props.isOwner
        && this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: ProfileStatusType, prevState: boolean) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status,
            })
        }
    }

    render() {
        return (
            <div className={style.main}>
                {
                    !this.state.editMode
                    && <div className={style.statusText}>
                        <h3>Status: </h3>
                        <span
                            className={style.status__text}
                            onDoubleClick={this.activateEditMode}
                        >
                            {this.props.status || "------"}
                            <span className={style.status__pencil}>
                                &nbsp;✎
                            </span>
                        </span>
                    </div>
                }
                {
                    this.state.editMode
                    && <div className={style.activeInput}>
                        <h3>Status:</h3>
                        <input
                            onChange={this.onStatusChange}
                            autoFocus
                            value={this.state.status}
                            onBlur={this.deactivateEditMode}
                        />
                    </div>
                }
            </div>
        )
    }
}

//types====

type ProfileStatusType = {
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
}

type stateType = {
    editMode: boolean
    status: string
    isOwner: boolean
}
