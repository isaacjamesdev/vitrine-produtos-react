import React, {Component} from 'react';
import Card from 'react-bootstrap/Card'
import {Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import Modal from 'react-bootstrap/Modal'

import PrateleiraApi from '../service/PrateleiraAPI'
  
  
 class MediaCard extends Component {

  constructor(props) {
    super(props);  
    this.state = {
      show: false,
    };
    
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  render(){
    return (
      <div>
        <Card style={{ width: '12rem' }}>
        <Card.Img variant="top" src={this.props.tratarPath(this.props.produto.thumbnail)}/>
        <Card.Body>
          <Card.Title>{this.props.produto.title}</Card.Title>
          <Card.Text>
            {this.props.produto.variantDescription}
          </Card.Text>
          <Button variant="outline-secondary" onClick={() => {this.handleShow(); this.props.moveTo(this.props.produto, 'PROMOCOES')}}>+ Promoções</Button>
          <Button variant="outline-secondary" onClick={() => {this.handleShow(); this.props.moveTo(this.props.produto, 'FAVORITOS')}}>+ Favoritos</Button>
          <Button variant="outline-secondary" onClick={() => {this.handleShow(); this.props.moveTo(this.props.produto, 'COMPRADOS')}}>+ Comprados</Button>
        </Card.Body>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Alterado com sucesso</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Ok
            </Button>
          </Modal.Footer>
        </Modal>
      </Card>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    moveTo: (produto, prateleira) =>{
      dispatch(PrateleiraApi.cadastrar(produto, prateleira));
    },
    tratarPath: (thumbnail) =>{
      return thumbnail.extension ? thumbnail.path+'/portrait_xlarge.'+ thumbnail.extension : thumbnail.path
    }
  }
}


export default connect(null, mapDispatchToProps)(MediaCard)