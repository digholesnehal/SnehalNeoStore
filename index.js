/** @format */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { createStore } from 'redux';

AppRegistry.registerComponent(appName, () => App);

