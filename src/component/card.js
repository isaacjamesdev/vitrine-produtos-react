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
        <Card.Img variant="top" src={this.props.product.thumbnail.path+'/portrait_xlarge.'+this.props.product.thumbnail.extension}/>
        <Card.Body>
          <Card.Title>{this.props.product.title}</Card.Title>
          <Card.Text>
            {this.props.product.variantDescription}
          </Card.Text>
          <Button variant="outline-secondary">+ Favoritos</Button>
          <Button variant="outline-secondary">+ Promoções</Button>
          <Button variant="outline-secondary">+ Comprados</Button>
        </Card.Body>
      </Card>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    listagem: () =>{ 
      dispatch(PrateleiraApi.listagem());
    },
    cadastrar: produto =>{
      dispatch(PrateleiraApi.cadastrar(produto));
    }
  }
}


export default connect(null, mapDispatchToProps)(MediaCard)