import React, { Component, Fragment } from "react";
import { Provider, connect } from "react-redux";
import store from "../store";
import Formulario from "./formulario";
import { Form, Container } from "react-bootstrap";

import PrateleiraApi from "../service/PrateleiraAPI";
import CollapseContent from "./CollapseComponente";
import Prateleira from "./prateleira";

class Application extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.buscar(this.query.value);
  }

  componentWillMount() {
    this.props.listagem();
  }

  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3
    };

    return (
      <Provider store={store}>
        <Container>
          <header>
            <div className="jumbotron jumbotron-fluid">
              <div className="container">
                <h1>Product Comics</h1>
                <blockquote className="blockquote text-center">
                  <p className="mb-0">Bem vindo</p>
                </blockquote>
              </div>
            </div>
          </header>
          <Fragment>
            <Form onSubmit={e => this.handleSubmit(e)}>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control
                  type="text"
                  placeholder="Buscar"
                  onChange={e => this.handleSubmit(e)}
                  ref={input => (this.query = input)}
                />
              </Form.Group>
            </Form>
            {(() => {
              if (this.query !== undefined && !(this.props.busca.length > 0)) {
                return (
                  <h4 style={{ color: "red", position: "center" }}>
                    {" "}
                    Sem Resultados
                  </h4>
                );
              }
            })()}
            {(() => {
              if (this.props.busca.length > 0 && this.query !== undefined) {
                return (
                  <div>
                    <CollapseContent nome="Resultado da Busca">
                      <Prateleira produtos={this.props.busca} />
                    </CollapseContent>
                  </div>
                );
              }
            })()}
          </Fragment>
          <Fragment>
            <div>
              <CollapseContent nome="Todos os Produtos">
                <Prateleira nome="" produtos={this.props.produtos} />
              </CollapseContent>
            </div>
            <div>
              <CollapseContent nome="Promoções">
                <Prateleira nome="promocoes" produtos={this.props.promocoes} />
              </CollapseContent>
            </div>
            <div>
              <CollapseContent nome="Favoritos">
                <Prateleira nome="favoritos" produtos={this.props.favoritos} />
              </CollapseContent>
            </div>
            <div>
              <CollapseContent nome="Comprados">
                <Prateleira nome="comprados" produtos={this.props.comprados} />
              </CollapseContent>
            </div>
            <div>
              <CollapseContent nome="Cadastro">
                <Formulario />
              </CollapseContent>
            </div>
          </Fragment>
        </Container>
      </Provider>
    );
  }
}
const mapStateToProps = state => ({
  busca: state.prateleira.busca,
  promocoes: state.prateleira.promocoes,
  comprados: state.prateleira.comprados,
  favoritos: state.prateleira.favoritos,
  produtos: state.prateleira.produtos
});

const mapDispatchToProps = dispatch => {
  return {
    buscar: query => dispatch(PrateleiraApi.busca(query)),
    listagem: () => {
      dispatch(PrateleiraApi.listagem());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Application);
