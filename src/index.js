import React from 'react';
import ReactDOM from 'react-dom';
//import { Switch, Route, BrowserRouter } from 'react-router-dom'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// export default class HelloWorldApp extends Component {
//   render() {
//     return (
//       <Text>Hello world!</Text>
//     );
//   }
// }


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();
