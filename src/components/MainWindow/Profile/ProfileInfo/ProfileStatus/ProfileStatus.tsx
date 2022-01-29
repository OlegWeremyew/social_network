import React from 'react';

type ProfileStatusType = {
    status: string
}
type stateType = {
    editMode: boolean
}

export class ProfileStatus extends React.Component<ProfileStatusType> {

    state: stateType = {
        editMode: false,
    }

    activateEditMode(){
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode(){
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                </div>}
                {this.state.editMode &&
                <div>
                    <input autoFocus value={this.props.status} onBlur={this.deactivateEditMode}/>
                </div>}
            </div>
        );
    }
};
