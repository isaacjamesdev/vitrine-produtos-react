import React, { Component, Fragment } from "react";
import { Provider, connect } from "react-redux";
import store from "../store";
import { Form, Container, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Card from "./card";
import Slider from "react-slick";
import CollapseContent from "./CollapseComponente";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as ActionCreator from "../store/action/ActionCreator";

// PARA API
import Axios from "axios";
const hash = "2d744ffccd666aacf33f89b0eefeeb06";
const key = "52cd47ed61eebd8f62bdf9d8922a64f8";
const baseUrl = "http://gateway.marvel.com/v1/public/";
const parameter = "comics";
const url = `${baseUrl}${parameter}?ts=1&apikey=${key}&hash=${hash}`;
Axios.create({
  baseURL: "http://gateway.marvel.com/v1/public/"
});

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.prateleiraComponent = this.prateleiraComponent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.buscar(this.query.value);
  }

  handleSubmit(event) {
    let produto = {
      id: Math.floor(Math.random() * 11),
      title: this.titulo.value,
      variantDescription: this.descricao.value,
      thumbnail: {
        path: this.url.value,
        extension: undefined
      },
      prateleira: this.prateleira.value
    };
    event.preventDefault();
    this.titulo.value = null;
    this.url.value = null;
    this.descricao.value = null;

    this.props.cadastrar(produto, produto.prateleira);
    // eslint-disable-next-line no-unused-expressions
    this.handleShow();
  }
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  componentWillMount() {
    this.props.listagem();
  }

  prateleiraComponent(produtos) {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3
    };

    return (
      <div>
        <Slider {...settings}>
          {produtos.map(produto => (
            <div key={produto.id}>
              <Card produto={produto} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }

  render() {
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
                      {/* < produtos={this.props.busca} /> */}
                      {this.prateleiraComponent(this.props.busca)}
                    </CollapseContent>
                  </div>
                );
              }
            })()}
          </Fragment>
          <Fragment>
            <div>
              <CollapseContent nome="Todos os Produtos">
                {this.prateleiraComponent(this.props.produtos)}
              </CollapseContent>
            </div>
            <div>
              <CollapseContent nome="Promoções">
                {this.prateleiraComponent(this.props.promocoes)}
              </CollapseContent>
            </div>
            <div>
              <CollapseContent nome="Favoritos">
                {this.prateleiraComponent(this.props.favoritos)}
              </CollapseContent>
            </div>
            <div>
              <CollapseContent nome="Comprados">
                {this.prateleiraComponent(this.props.comprados)}
              </CollapseContent>
            </div>
            <div>
              <CollapseContent nome="Cadastro">
                <Form onSubmit={e => this.handleSubmit(e)}>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Titulo do Produto</Form.Label>
                    <Form.Control
                      type="text"
                      ref={input => (this.titulo = input)}
                    />
                    <Form.Label>descrição</Form.Label>
                    <Form.Control
                      type="text"
                      ref={input => (this.descricao = input)}
                    />
                    <Form.Label>URL da imagem</Form.Label>
                    <Form.Control
                      type="text"
                      ref={input => (this.url = input)}
                    />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Control
                      as="select"
                      ref={input => (this.prateleira = input)}
                    >
                      <option value="comprados">Comprados</option>
                      <option value="favoritos">Favoritos</option>
                      <option value="promocoes">Promoções</option>
                    </Form.Control>
                  </Form.Group>
                  <Button type="submit">Cadastrar</Button>

                  <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Objeto cadastrado</Modal.Title>
                    </Modal.Header>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={this.handleClose}>
                        Ok
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </Form>
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

const listagem = () => {
  return dispatch => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        dispatch(ActionCreator.listagem(data));
        return data;
      });
  };
};

const busca = query => {
  return dispatch => {
    if (query) dispatch(ActionCreator.busca(query));
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buscar: query => dispatch(busca(query)),
    listagem: () => {
      dispatch(listagem());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Application);
