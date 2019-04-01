import React, {Component} from 'react'
import { Form } from 'react-bootstrap';


export default class Formulario extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
      console.log('submetido');
      
    }
  
    render() {
      return (
        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Example select</Form.Label>
                    <Form.Control as="select">
                        <option>Comprados</option>
                        <option>Favoritos</option>
                        <option>Promoções</option>
                    </Form.Control>
                </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows="3" />
            </Form.Group>
        </Form>
      );
    }
  }