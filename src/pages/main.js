import React from 'react';
import {Container} from 'react-bootstrap';
import {BrowserRouter} from 'react-router-dom';
// my-imports
import Vitrine from '../component/vitrine';
import Cabecalho from '../component/Cabecalho';
import Busca from '../component/Busca';
import Formulario from '../component/formulario';


const main = ()=>(
      <BrowserRouter>
        <Container>
          <Cabecalho/>
          <Formulario/>
          <Vitrine/>
        </Container>
      </BrowserRouter>
    )

export default main;