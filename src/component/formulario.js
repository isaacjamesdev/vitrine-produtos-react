import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Navbar, Nav, Button, Form} from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'

import PrateleiraApi from '../service/PrateleiraAPI';
import Busca from './Busca';
class Formulario extends Component {
    constructor(props) {
      super(props);  
      this.state = {
        show: false,
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.menu = this.menu.bind(this);
      this.modal = this.modal.bind(this);
    }    
  
    handleSubmit(event) {
      event.preventDefault();
      let produto = {
        id: Math.floor(Math.random() * 11),
        title: this.titulo.value,
        description: this.descricao.value,
        thumbnail: {
          path: this.url.value,
          extension: undefined
        },
        prateleira: this.prateleira.value
      }

      this.titulo.value = null
      this.url.value = null
      this.descricao.value = null

      this.props.cadastrar(produto, produto.prateleira);
      this.handleClose();
    }
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }

    menu = () => (
      <Navbar bg="dark" variant="dark" expand="md">
        <Navbar.Brand href="/#home">Product Comics</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={()=> this.handleShow()}>Cadastro</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
    

    modal = ()=> <Modal show={this.state.show} onHide={this.handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Cadastrar Comic</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form onSubmit={e => this.handleSubmit(e)}>
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Titulo do Produto</Form.Label>
            <Form.Control type="text" ref={(input)=> this.titulo = input} />
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Descrição</Form.Label>
              <Form.Control as="textarea" rows="3" maxlength="250" placeHolder="máximo 250 characters" ref={(input)=> this.descricao = input} />
          </Form.Group>
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
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="outline-success" onClick={this.handleSubmit}>
        Cadastrar
      </Button>
    </Modal.Footer>
  </Modal>

    render() {
      return (
        <div>
          {this.menu()}
          {this.modal()}
          <Busca/>
        </div>
        
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
