import { ComponentType } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';

import { Dialogs } from './Dialogs';
import { MapDispatchToPropsType, MapStateToPropsType } from './types';

import { MessageActions } from 'redux/messagesReducer';
import { AppStateType } from 'redux/types';
import { getMessagesPageSelector } from 'selectors';
import { withAuthRedirect } from 'utils';

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  messagesPage: getMessagesPageSelector(state),
});

export const DialogsContainer = compose<ComponentType>(
  connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(
    mapStateToProps,
    {
      addMessage: MessageActions.addMessage,
    },
  ),
  withAuthRedirect,
)(Dialogs);
