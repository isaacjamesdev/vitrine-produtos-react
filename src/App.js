import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
// My-Components;
import Routes from './Routes';


const App = ()=>{
  return (
    <Provider store={store}>
        <Routes/>
    </Provider>
  )
}

export default App;
