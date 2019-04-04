import {AppRegistry} from 'react-360';
import Temperature from './components/Temperature'
import Card from './components/Card'

// Registra os componentes
AppRegistry.registerComponent('Hello360', () => Temperature);
AppRegistry.registerComponent('Card', () => Card);