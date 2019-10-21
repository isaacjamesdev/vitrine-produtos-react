import React, { Component } from "react";
import Slider from "react-slick";

import PropTypes from "prop-types";
// my css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";

class Prateleira extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3
    };

    return (
      <div>
        <Slider {...settings}>
          {this.props.produtos.map(produto => (
            <div key={produto.id}>
              <Card produto={produto} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
// eslint-disable-next-line react/no-typos
Prateleira.PropTypes = {
  nome: PropTypes.string
}.isRequired;

export default Prateleira;
