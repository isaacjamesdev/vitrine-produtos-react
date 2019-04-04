import React, {Component} from 'react'
import { Form} from 'react-bootstrap';
import {connect} from 'react-redux'
import PrateleiraApi from '../service/PrateleiraAPI';

class Search extends Component {
    constructor(props) {
      super(props);  
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      event.preventDefault();
      this.props.search(this.titulo.value);
    }

    render() {
      return (
        <Form onSubmit={e => this.handleSubmit(e)}>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Buscar" onChange={e => this.handleSubmit(e)} ref={(input)=> this.titulo = input} />
            </Form.Group>
        </Form>
      );
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
      search: titulo =>
        dispatch(PrateleiraApi.search(titulo))
    }
  }

  export default connect(null, mapDispatchToProps)(Search);