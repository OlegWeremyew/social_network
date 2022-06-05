import { ComponentType } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';

import { MessageActions } from '../../../redux/messagesReducer';
import { AppStateType } from '../../../redux/types';
import { getMessagesPageSelector } from '../../../selectors';
import { withAuthRedirect } from '../../../utils';

import { Dialogs } from './Dialogs';
import { MapDispatchToPropsType, MapStateToPropsType } from './types';

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  messagesPage: getMessagesPageSelector(state),
});

const DialogsContainer = compose<ComponentType>(
  connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(
    mapStateToProps,
    {
      addMessage: MessageActions.addMessage,
    },
  ),
  withAuthRedirect,
)(Dialogs);

export default DialogsContainer;
