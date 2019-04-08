/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */
import React, {Component, Fragment} from 'react'
import { Form} from 'react-bootstrap';
import {connect} from 'react-redux'

import PrateleiraApi from '../service/PrateleiraAPI';
import CollapseContent from './CollapseComponente'
import Prateleira from './prateleira'


class Busca extends Component {
    constructor(props) {
      super(props);  
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      event.preventDefault();
      this.props.buscar(this.query.value);
    }

    render() {
      return(
        <Fragment>
          <Form onSubmit={e => this.handleSubmit(e)}>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Buscar" onChange={e => this.handleSubmit(e)} ref={(input)=> this.query = input} />
              </Form.Group>
          </Form>  
            {
              (() => {
                if(this.query !== undefined && !(this.props.busca.length > 0)) { 
                  return <h4 style={{color: 'red', position: 'center'}}> Sem Resultados</h4>
                }
              })()
            }{
              (() => {
                if(this.props.busca.length > 0 && this.query !== undefined) {
                  return <div>
                            <CollapseContent nome='Resultado da Busca'>
                              <Prateleira produtos={this.props.busca}/>
                            </CollapseContent>
                          </div>
                }
              })()
            }
        </Fragment>
      )
    }
  }

  const mapStateToProps = state => ({
    busca: state.prateleira.busca
  })

  const mapDispatchToProps = dispatch => {
    return {
      buscar: query =>
        dispatch(PrateleiraApi.busca(query))
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Busca);