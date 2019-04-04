import React, {Fragment} from 'react';
import {Provider} from 'react-redux'
import {Container} from 'react-bootstrap'
import store from './store'
// My-Imports
import Vitrine from './component/vitrine'
import Formulario from './component/Formulario'
import CollapseContent from './component/CollapseContent'
import Header from './component/Header'

const App = ()=>{
  return (
    <Provider store={store}>
      <Fragment>
        <Container>
          <Header/>
          <Vitrine/>

          <CollapseContent nome='Cadastrar produto'>
            <Formulario/> 
          </CollapseContent>

        </Container>
      </Fragment>
    </Provider>
  )
}

export default App;
