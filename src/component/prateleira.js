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

    if(this.props.nome ==='promocao'){
      return (
        <div>
          <Slider {...settings}>
            {
              this.props.promocoes.map(product => 
                <div key={product.id}>
                  <Card product={product}/>
                </div>
              )
            }
          </Slider>
        </div>
      );
    }
    if(this.props.nome ==='favoritos'){
      return (
        <div>
          <Slider {...settings}>
            {
              this.props.favoritos.map(product => 
                <div key={product.id}>
                  <Card product={product}/>
                </div>
              )
            }
          </Slider>
        </div>
      );
    }
    if(this.props.nome ==='comprados'){
      return (
        <div>
            <Slider {...settings}>
            {
              this.props.comprados.map(product => 
                <div key={product.id}>
                  <Card product={product}/>
                </div>
              )
            }
          </Slider>
        </div>
      );
    }
  }

  carregaProdutos(){
    this.props.listagem(this.props.nome);
  }
  componentDidMount(){
    this.carregaProdutos();
  }
}
// eslint-disable-next-line react/no-typos
Prateleira.PropTypes = ({
  nome: PropTypes.string
  }.isRequired
)

const mapStateToProps = state =>({
  promocoes: state.prateleira.promocoes,
  comprados: state.prateleira.comprados,
  favoritos: state.prateleira.favoritos
})

const mapDispatchToProps = dispatch => {
  return {
    listagem: nome =>{ 
      dispatch(PrateleiraApi.listagem(nome));
    },
    cadastrar: produto =>{
      dispatch(PrateleiraApi.cadastrar(produto));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Prateleira)