import React, {Component} from 'react';
import Card from 'react-bootstrap/Card'
import {Button, ModalBody, ModalFooter} from 'react-bootstrap'
import {connect} from 'react-redux'
import Modal from 'react-bootstrap/Modal'
// material-ui
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';

import LocalOfferBorder from '@material-ui/icons/LocalOfferOutlined';
import LocalOffer from '@material-ui/icons/LocalOffer'

import CheckCircleBorder from '@material-ui/icons/CheckCircleOutline';
import CheckCircle from '@material-ui/icons/CheckCircle';

// my-imports
import PrateleiraApi from '../service/PrateleiraAPI'
  
  
 class MediaCard extends Component {

  constructor(props) {
    super(props);  
    this.state = {
      show: false,
      ModalCard: false,
      inComprados: false,
      inFavoritos: false,
      inPromocoes: false
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleCloseModalCard = this.handleCloseModalCard.bind(this);
    this.handleShowModalCard = this.handleShowModalCard.bind(this)
    this.MyModal = this.MyModal.bind(this);
    this.statusProduto = this.statusProduto.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleShowModalCard() {
    this.setState({ ModalCard: true });
  }

  handleCloseModalCard() {
    this.setState({ ModalCard: false });
  }

  statusProduto(produto, prateleira){
    prateleira.find(item => item.id === produto.id);
  }

  componentDidMount(){
    console.log('vida desde pequeno humilhado');
    console.log(this.state.inFavoritos);
  }
  MyModal = ()=>
    <Modal show={this.state.ModalCard} onHide={()=> this.setState({ModalCard: false})}>
      <ModalBody style={{maxHeight: '40vw', overflow: 'auto'}}>
          <Card style={{minHeight: '15vw', maxHeight: '23vw'}}>
            <Card.Header>
              <Card.Img style={{minHeight: '20vw', maxHeight: '20vw', maxWidth: '15vw', display:"flex", margin:"0 auto"}} variant="top" src={this.props.tratarPath(this.props.produto.thumbnail)}/>
            </Card.Header>
            <Card.Body>
              <Card.Title>
                {this.props.produto.title}
              </Card.Title>
              <Card.Text>
                {this.props.produto.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </ModalBody>
        <ModalFooter style={{justifyContent: "center"}}>
          <IconButton className="icon" onClick={() => {this.handleShow(); this.props.moveTo(this.props.produto, 'FAVORITOS'); this.setState({inFavoritos: !this.state.inFavoritos})}}>
            {this.statusProduto(this.props.produto, this.props.favoritos) ? <Favorite color="error"/> : <FavoriteBorder/>}
          </IconButton>
          <IconButton className="icon" onClick={() => {this.handleShow(); this.props.moveTo(this.props.produto, 'PROMOCOES')}}>
            <LocalOffer /> 
          </IconButton>
          <IconButton className="icon" onClick={() => {this.handleShow(); this.props.moveTo(this.props.produto, 'COMPRADOS')}}>
            <CheckCircle />
          </IconButton>
        </ModalFooter>
    </Modal>

  render(){
    return (
      <div>
        <Card style={{minHeight: '30vw', maxHeight: '30vw'}} className="card">
          <Card.Img style={{minHeight: '23vw', maxHeight: '23vw'}} variant="top" src={this.props.tratarPath(this.props.produto.thumbnail)}  onClick={()=> this.handleShowModalCard()}/>
          <Card.Body>
            <Card.Title className="title" >{this.props.produto.title}</Card.Title>
            <IconButton className="icon" onClick={() => {this.handleShow(); this.props.moveTo(this.props.produto, 'FAVORITOS'); this.setState({inFavoritos: !this.state.inFavoritos})}}>
            {this.statusProduto(this.props.produto, this.props.favoritos) ? <Favorite color="error"/> : <FavoriteBorder/>}
             
            </IconButton>
            <IconButton className="icon" onClick={() => {this.handleShow(); this.props.moveTo(this.props.produto, 'PROMOCOES')}}>
              <LocalOffer /> 
            </IconButton>
            <IconButton className="icon" onClick={() => {this.handleShow(); this.props.moveTo(this.props.produto, 'COMPRADOS')}}>
              <CheckCircleBorder />
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
        {this.MyModal()}
      </div>
    ) 
  } 

 }

 const mapStateToProps = state =>({
  promocoes: state.prateleira.promocoes,
  comprados: state.prateleira.comprados,
  favoritos: state.prateleira.favoritos,
  produtos: state.prateleira.produtos
})

const mapDispatchToProps = dispatch => {
  return {
    moveTo: (produto, prateleira) =>{
      dispatch(PrateleiraApi.cadastrar(produto, prateleira));
    },
    tratarPath: (thumbnail) =>{
      return thumbnail.extension ? thumbnail.path+'.'+ thumbnail.extension : thumbnail.path
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MediaCard)