/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import hello from './src/hello';
import Todo from './src/components/Todo';

AppRegistry.registerComponent(appName, () => Todo);
