import React from 'react';

import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { mapStateToPropsType } from './types';

import { PATH } from 'enums';
import { AppStateType } from 'redux/types';
import { getAuthIsAuthSelector } from 'selectors';
import { ReturnComponentType } from 'types/ReturnComponentType';

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
  isAuth: getAuthIsAuthSelector(state),
});

export function withAuthRedirect<T>(WrappedComponent: any): any {
  const RedirectComponent = (props: mapStateToPropsType): ReturnComponentType => {
    const { isAuth, ...restProps } = props;

    if (!isAuth) {
      return <Navigate to={PATH.LOGIN} />;
    }
    return <WrappedComponent {...(restProps as T)} />;
  };
  return connect(mapStateToProps)(RedirectComponent);
}
