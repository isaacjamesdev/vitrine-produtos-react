import React, {Fragment, Component} from 'react';
import {connect} from 'react-redux'

import CollapseContent from './CollapseContent'
import PrateleiraApi from '../service/PrateleiraAPI'
import Prateleira from './prateleira'

class vitrine extends Component{
    render(){
      return (
        <Fragment>
          <div>
          <CollapseContent nome='Promoções'>
            <Prateleira produtos={this.props.produtos}/>
          </CollapseContent>
        </div>
        <div>
          <CollapseContent nome='Favoritos'>
             <Prateleira produtos={this.props.favoritos}/>
          </CollapseContent>
        </div>
        <div>
          <CollapseContent nome='Comprados'>
           <Prateleira produtos={this.props.comprados}/>
          </CollapseContent>
        </div>
        </Fragment>
      )
    }

     carregaProdutos(){
      this.props.listagem();
    }
    componentWillMount(){
      this.carregaProdutos();
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
    },
    cadastrar: produto =>{
      dispatch(PrateleiraApi.cadastrar(produto));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(vitrine)