import React, {Component} from 'react';
import Card from 'react-bootstrap/Card'
import {Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import Modal from 'react-bootstrap/Modal'
// material-ui
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import BookMarkIcon from '@material-ui/icons/BookmarkBorder';
import MoneyOff from '@material-ui/icons/MoneyOffOutlined';

// my-imports
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
        <Card className="card">
        <Card.Img variant="top" src={this.props.tratarPath(this.props.produto.thumbnail)}/>
        <Card.Body>
          <Card.Title className="title" >{this.props.produto.title}</Card.Title>
          <IconButton className="icon" onClick={() => {this.handleShow(); this.props.moveTo(this.props.produto, 'PROMOCOES')}}>
            <FavoriteIcon />
          </IconButton>
          <IconButton className="icon" onClick={() => {this.handleShow(); this.props.moveTo(this.props.produto, 'FAVORITOS')}}>
            <BookMarkIcon /> 
          </IconButton>
          <IconButton className="icon" onClick={() => {this.handleShow(); this.props.moveTo(this.props.produto, 'COMPRADOS')}}>
            <MoneyOff />
          </IconButton>
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