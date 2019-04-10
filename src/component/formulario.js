import React, {Component} from 'react'
import { Form, Button } from 'react-bootstrap';
import {connect} from 'react-redux'
import Modal from 'react-bootstrap/Modal'

import PrateleiraApi from '../service/PrateleiraAPI';


class Formulario extends Component {
    constructor(props, context) {
      super(props, context);

      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

      this.state = {
        show: false,
      };
    }
  
    handleSubmit(event) {
      let produto = {
        id: Math.floor(Math.random() * 11),
        titulo: this.titulo.value,
        descricao: this.descricao.value,
        preco: this.preco.value,
        url: this.url.value,
        categoria: this.categoria.value
      }
      event.preventDefault();
      this.handleClose();
      console.log(produto);
      
      // this.props.cadastrar(produto);
    }

    handleClose() {
      this.setState({ show: false });
    }

    handleShow() {
      this.setState({ show: true });
    }

    render() {
      return (
        <>
              <Button variant="primary" onClick={this.handleShow}>
                Cadastro
              </Button>

              <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                
                <Modal.Body>
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
                        <Form.Label>Prateleira</Form.Label>
                            <Form.Control as="select" ref={(input)=> this.categoria = input}>
                                <option value='comprados' >Comprados</option>
                                <option value='favoritos'>Favoritos</option>
                                <option value='promocoes'>Promoções</option>
                            </Form.Control>
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleClose}>
                    Close
                  </Button>
                  <Button type='submit' onClick={this.handleSubmit}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>  
          <div>
            <p></p>
          </div>
        </>
      );
    }
  }

  export default connect(null,null)(Formulario);