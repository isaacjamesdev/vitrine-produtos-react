import React, {Component} from 'react';
import Slider from "react-slick";

import PropTypes from 'prop-types';
// my css
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Card from './card'


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

  
}
// eslint-disable-next-line react/no-typos
Prateleira.PropTypes = ({
  nome: PropTypes.string
  }.isRequired
)

export default Prateleira;