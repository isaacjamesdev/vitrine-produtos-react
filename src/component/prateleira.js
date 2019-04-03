import React, {Component} from 'react';
import Slider from "react-slick";
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
// my css
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Card from './card'
import PrateleiraApi from '../service/PrateleiraAPI'

class Prateleira extends Component {
  
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div>
        <h4>Vertical Mode</h4>
        <Slider {...settings}>
          {
            this.props.produtos.map(product => 
              <div key={product.id}>
                  <Card product={product}/>
                </div>
            )
          }
        </Slider>
      </div>
    );
  }
  carregaProdutos(){
    this.props.listagem(this.props.nome);
  }
  componentDidMount(){
    this.carregaProdutos();
  }
}
// eslint-disable-next-line react/no-typos
Prateleira.PropTypes = {
  produtos: PropTypes.arrayOf(PropTypes.shape({
    descricao: PropTypes.string,
    id: PropTypes.number,
    preco: PropTypes.number,
    titulo: PropTypes.string,
    url: PropTypes.string
  })).isRequired,
}

const mapStateToProps = state =>({
  produtos: state.prateleira
})

const mapDispatchToProps = dispatch => {
  return {
    listagem: nome =>{ 
      dispatch(PrateleiraApi.listagem(nome));
    },
    favoritos: ()=>{
      dispatch(PrateleiraApi.favoritos());
    },
    cadastrar: produto =>{
      dispatch(PrateleiraApi.cadastrar(produto));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Prateleira)