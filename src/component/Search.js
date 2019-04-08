/* eslint-disable no-lone-blocks */
import React, {Component, Fragment} from 'react'
import { Form} from 'react-bootstrap';
import {connect} from 'react-redux'

import PrateleiraApi from '../service/PrateleiraAPI';
import CollapseContent from './CollapseContent'
import Prateleira from './prateleira'


class Search extends Component {
    constructor(props) {
      super(props);  
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      event.preventDefault();
      this.props.search(this.query.value);
    }

    render() {
      {
        if(this.query === undefined){
          return (
            <Fragment>
              <Form onSubmit={e => this.handleSubmit(e)}>
                  <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Control type="text" placeholder="Buscar" onChange={e => this.handleSubmit(e)} ref={(input)=> this.query = input} />
                  </Form.Group>
              </Form>
              <div>
                <CollapseContent nome='Resultado da Busca'>
                  <Prateleira produtos={[]}/>
                </CollapseContent>
              </div>
            </Fragment>
          );
        }else{
            return (
              <Form onSubmit={e => this.handleSubmit(e)}>
                  <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Control type="text" placeholder="Buscar" onChange={e => this.handleSubmit(e)} ref={(input)=> this.query = input} />
                  </Form.Group>
                  <h5>no results</h5>
              </Form>)
        }
    }
    }
  }

  const mapStateToProps = state => ({
    search: state.prateleira.search
  })

  const mapDispatchToProps = dispatch => {
    return {
      search: query =>
        dispatch(PrateleiraApi.search(query))
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Search);