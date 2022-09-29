import React from 'react';
import ReactDOM from 'react-dom';
// import App from './reactjs/App';
// import Variabel from './reactjs/Variabel';
// import StateProps from './reactjs/StateProps'
// import Map from './reactjs/Map'
// import Lifecycle from './reactjs/Lifecycle'

import 'bootstrap/dist/css/bootstrap.min.css';
import Crud from './crud'

ReactDOM.render(
  <React.StrictMode>
    <Crud />
  </React.StrictMode>,
  document.getElementById('root')
);