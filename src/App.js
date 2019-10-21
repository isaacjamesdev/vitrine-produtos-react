import React from "react";
import { Provider } from "react-redux";
import { Container } from "react-bootstrap";
import store from "./store";
// My-Components;
import Application from "./component/aplication";

const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <Application />
      </Container>
    </Provider>
  );
};

export default App;
