import React, {Component} from 'react'
import { Form, Button } from 'react-bootstrap';
import {connect} from 'react-redux'
import PrateleiraApi from '../service/PrateleiraAPI';

class Formulario extends Component {
    constructor(props) {
      super(props);  
      this.handleSubmit = this.handleSubmit.bind(this);
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
      this.props.cadastrar(produto);
    }

    render() {
      return (
        <Form onSubmit={e => this.handleSubmit(e)}>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Titulo do Produto</Form.Label>
                <Form.Control type="text" ref={(input)=> this.titulo = input} />
                <Form.Label>descrição</Form.Label>
                <Form.Control type="text" ref={(input)=> this.descricao = input} />
                <Form.Label>Preço</Form.Label>
                <Form.Control type="number" ref={(input)=> this.preco = input} />
                <Form.Label>URL da imagem</Form.Label>
                <Form.Control type="text" ref={(input)=> this.url = input} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Categoria</Form.Label>
                    <Form.Control as="select" ref={(input)=> this.categoria = input}>
                        <option value='comprados' >Comprados</option>
                        <option value='favoritos'>Favoritos</option>
                        <option value='promocoes'>Promoções</option>
                    </Form.Control>
                </Form.Group>
            <Button type='submit'>Cadastrar</Button>
        </Form>
      );
    }
  }
  const mapStateToProps = state =>({
    
  })

  const mapDispatchToProps = dispatch => {
    return {
      
      cadastrar: produto =>{
        dispatch(PrateleiraApi.cadastrar(produto));