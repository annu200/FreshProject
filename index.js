import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './App';
import 'react-native-gesture-handler'; // <-- Add this

AppRegistry.registerComponent(appName, () => App);
