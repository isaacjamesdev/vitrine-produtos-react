import React, {Fragment, Component} from 'react';
import {connect} from 'react-redux'

import CollapseContent from './CollapseComponente'
import PrateleiraApi from '../service/PrateleiraAPI'
import Prateleira from './prateleira'
import Formulario from './formulario';
class vitrine extends Component{
    render(){
      return (
        <Fragment>
          <div>
          <CollapseContent nome='Todos os Produtos'>
            <Prateleira produtos={this.props.produtos}/>
          </CollapseContent>
        </div>
        {/* <div>
          <CollapseContent nome='Promoções'>
            <Prateleira produtos={this.props.promocoes}/>
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
        </div> */}
        <Formulario/>
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