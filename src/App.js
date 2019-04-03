import React, {Fragment} from 'react';
import {Provider} from 'react-redux'
import {Container} from 'react-bootstrap'
// My-Imports
import Vitrine from './component/vitrine'
import Formulario from './component/Formulario'
import store from './store'

const App = ()=>{
  return (
    <Provider store={store}>
      <Fragment>
        <Container>
          <Vitrine/>
          <Formulario/>
        </Container>
      </Fragment>
    </Provider>
  )
}

export default App;
