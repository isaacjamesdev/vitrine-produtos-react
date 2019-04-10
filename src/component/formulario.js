import React, {Component} from 'react'
import { Form, Button } from 'react-bootstrap';
import {connect} from 'react-redux'
import Modal from 'react-bootstrap/Modal'

import PrateleiraApi from '../service/PrateleiraAPI';

class Formulario extends Component {
    constructor(props) {
      super(props);  
      this.state = {
        show: false,
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
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
      }
      event.preventDefault();
      this.titulo.value = null
      this.url.value = null
      this.descricao.value = null

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
    render() {
      return (
        <Form onSubmit={e => this.handleSubmit(e)}>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Titulo do Produto</Form.Label>
                <Form.Control type="text" ref={(input)=> this.titulo = input} />
                <Form.Label>descrição</Form.Label>
                <Form.Control type="text" ref={(input)=> this.descricao = input} />
                <Form.Label>URL da imagem</Form.Label>
                <Form.Control type="text" ref={(input)=> this.url = input} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Categoria</Form.Label>
                    <Form.Control as="select" ref={(input)=> this.prateleira = input}>
                        <option value='comprados' >Comprados</option>
                        <option value='favoritos'>Favoritos</option>
                        <option value='promocoes'>Promoções</option>
                    </Form.Control>
                </Form.Group>
            <Button type='submit'>Cadastrar</Button>

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
      );
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      cadastrar: (produto,prateleira) =>{
        dispatch(PrateleiraApi.cadastrar(produto, prateleira));
      }
    }
  }

  export default connect(null,mapDispatchToProps)(Formulario);
