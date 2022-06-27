import React, { Suspense } from 'react';

import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import { App } from './App';

import { Loading } from 'common';
import { store } from 'redux/reduxStore';
import { ReturnComponentType } from 'types/ReturnComponentType';

export const MainApp = (): ReturnComponentType => (
  <Suspense fallback={<Loading />}>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </Suspense>
);
