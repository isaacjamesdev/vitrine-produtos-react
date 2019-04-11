import React, {Fragment, Component} from 'react';
import {connect} from 'react-redux'
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import LocalOffer from '@material-ui/icons/LocalOffer';
import CheckCircleOutlineOutlined from '@material-ui/icons/CheckCircleOutlineOutlined';

import PrateleiraApi from '../service/PrateleiraAPI'
import Prateleira from './prateleira'

class vitrine extends Component{
    render(){
      return (
        <Fragment>
          <div>
          <h2>Todos</h2>
            <Prateleira nome = 'produtos' produtos={this.props.produtos}/>
          </div>
          <div>
          <h2>{<LocalOffer/>} Promoções</h2> 
            <Prateleira nome = 'promocoes' produtos={this.props.promocoes}/>
          </div>
          <div>
            <h2>{<FavoriteIcon/>} Favoritos</h2>
            <Prateleira nome = 'favoritos' produtos={this.props.favoritos}/>
          </div>
          <div>
            <h2>{<CheckCircleOutlineOutlined/>} Comprados</h2>
            <Prateleira nome = 'comprados' produtos={this.props.comprados}/>
          </div>
        </Fragment>
      )
    }

    componentWillMount(){
      this.props.listagem();
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
    listagem: () =>{ 
      dispatch(PrateleiraApi.listagem());
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(vitrine)