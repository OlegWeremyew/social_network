import React, {ChangeEvent} from 'react';
import style from './ProfileStatus.module.css'


export class ProfileStatus extends React.Component<ProfileStatusType> {

    state: stateType = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
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
                }
            )
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div className={style.statusText}>
                    <h3>Status: </h3> <span onDoubleClick={this.activateEditMode}>{ this.props.status || "------"}
                    <span>&nbsp;✎</span></span>
                </div>}
                {this.state.editMode &&
                <div>
                    <h3>Status:</h3>
                    <input
                        onChange={this.onStatusChange}
                        autoFocus
                        value={this.state.status}
                        onBlur={this.deactivateEditMode}
                    />
                </div>}
            </div>
        )
    }
}

//types====

type ProfileStatusType = {
    status: string
    updateUserStatus: (status: string) => void
}

type stateType = {
    editMode: boolean
    status: string
}
