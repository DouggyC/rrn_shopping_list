import React from 'react';
import App from './App';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';

import configureStore from './src/store';

const store = configureStore();

const RnShoppingList = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RnShoppingList);
