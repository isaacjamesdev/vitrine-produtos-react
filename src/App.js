import React from 'react';
import {Provider} from 'react-redux';
import {Container} from 'react-bootstrap';
import store from './store';
// My-Imports;
import Vitrine from './component/vitrine';
import Formulario from './component/Formulario';
import CollapseContent from './component/CollapseContent';
import Header from './component/Header';
import Search from './component/Search';
const App = ()=>{
  return (
    <Provider store={store}>
        <Container>
          <Header/>
          <Search/>
          <Vitrine/>
          <CollapseContent nome='Cadastro'>
            <Formulario/> 
          </CollapseContent>

        </Container>
    </Provider>
  )
}

export default App;
