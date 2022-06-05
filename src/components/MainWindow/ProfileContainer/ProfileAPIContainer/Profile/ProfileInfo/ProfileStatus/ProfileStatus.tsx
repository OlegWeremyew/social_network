import React, { ChangeEvent } from 'react';

import { ReturnComponentType } from '../../../../../../../types/ReturnComponentType';

import style from './ProfileStatus.module.scss';
import { ProfileStatusPropsType, stateProfileStateType } from './types';

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
  state: stateProfileStateType = {
    editMode: false,
    status: this.props.status,
    isOwner: this.props.isOwner,
  };

  activateEditMode = (): void => {
    const { isOwner } = this.props;
    isOwner &&
      this.setState({
        editMode: true,
      });
  };

  deactivateEditMode = (): void => {
    const { updateUserStatus } = this.props;
    this.setState({
      editMode: false,
    });
    updateUserStatus(this.state.status);
  };

  onStatusChange = (e: ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  componentDidUpdate(prevProps: ProfileStatusPropsType, prevState: boolean): void {
    const { status } = this.props;
    if (prevProps.status !== status) {
      this.setState({
        status,
      });
    }
  }

  render(): any {
    return (
      <div className={style.main}>
        {!this.state.editMode && (
          <div className={style.statusText}>
            <h3>Status: </h3>
            <span className={style.status__text} onDoubleClick={this.activateEditMode}>
              {this.props.status || '------'}
              <span className={style.status__pencil}>&nbsp;✎</span>
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div className={style.activeInput}>
            <h3>Status:</h3>
            <input
              onChange={this.onStatusChange}
              autoFocus
              value={this.state.status}
              onBlur={this.deactivateEditMode}
            />
          </div>
        )}
      </div>
    );
  }
}
