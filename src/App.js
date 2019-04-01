import React from 'react';
import {Provider} from 'react-redux'

// My-Imports
import Vitrine from './component/vitrine'
import Formulario from './component/Formulario'
import store from './store'

const App = ()=>{
  return (
    <Provider store={store}>
      <div>
        <Vitrine/>
        <Formulario/>
      </div>
    </Provider>
  )
}

export default App;
