import React, {Component} from 'react';
import Card from 'react-bootstrap/Card'
import {Button} from 'react-bootstrap'
import {connect} from 'react-redux'

import PrateleiraApi from '../service/PrateleiraAPI'
  
// "title" "variantDescription"
// data results thumbnail path, extension 
  
 class MediaCard extends Component {
  render(){
    return (
      <div>
        <Card style={{ width: '12rem' }}>
        <Card.Img variant="top" src={this.props.produto.thumbnail.path+'/portrait_xlarge.'+this.props.produto.thumbnail.extension}/>
        <Card.Body>
          <Card.Title>{this.props.produto.title}</Card.Title>
          <Card.Text>
            {this.props.produto.variantDescription}
          </Card.Text>
          <Button variant="outline-secondary" onClick={() => this.props.moveTo(this.props.produto, 'PROMOCOES')}>+ Promoções</Button>
          <Button variant="outline-secondary" onClick={() => this.props.moveTo(this.props.produto, 'FAVORITOS')}>+ Favoritos</Button>
          <Button variant="outline-secondary" onClick={() => this.props.moveTo(this.props.produto, 'COMPRADOS')}>+ Comprados</Button>
        </Card.Body>
      </Card>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    moveTo: (produto, prateleira) =>{
      dispatch(PrateleiraApi.cadastrar(produto, prateleira));
    }
  }
}


export default connect(null, mapDispatchToProps)(MediaCard)