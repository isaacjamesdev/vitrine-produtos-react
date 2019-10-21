import React from "react";
import { Provider } from "react-redux";
import { Container } from "react-bootstrap";
import store from "./store";
// My-Components;
import Vitrine from "./component/Vitrine";
import Cabecalho from "./component/Cabecalho";
import Busca from "./component/Busca";

const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <Cabecalho />
        <Busca />
        <Vitrine />
      </Container>
    </Provider>
  );
};

export default App;
