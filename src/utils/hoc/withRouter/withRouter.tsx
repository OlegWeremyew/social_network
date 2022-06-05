import React from 'react';

import { useLocation, useParams } from 'react-router-dom';

import { WrappedComponentWithRouterPropsType } from './types';

export const withRouter =
  (WrappedComponent: any) => (props: WrappedComponentWithRouterPropsType) => {
    const params = useParams<'userId'>();
    const location = useLocation();
    return <WrappedComponent {...props} userId={params.userId} location={location} />;
  };

export const withRouter2 =
  <T extends object>(WrappedComponent: any) =>
  (props: any) => {
    const params = useParams<'userId'>();
    const location = useLocation();
    return (
      <WrappedComponent {...(props as T)} userId={params.userId} location={location} />
    );
  };
