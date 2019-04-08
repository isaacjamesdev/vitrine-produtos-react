import React from 'react';
import {Provider} from 'react-redux';
import {Container} from 'react-bootstrap';
import store from './store';
// My-Components;
import Vitrine from './component/vitrine';
import Header from './component/Header';
import Search from './component/Search';


const App = ()=>{
  return (
    <Provider store={store}>
        <Container>
          <Header/>
          <Search/>
          <Vitrine/>
        </Container>
    </Provider>
  )
}

export default App;
