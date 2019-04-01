import React, {Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import Card from './card'


class VerticalMode extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div>
        <h2>Vertical Mode</h2>
        <Slider {...settings}>
          <div>
            <Card/>
          </div>
          <div>
            <Card/>
          </div>
          <div>
            <Card/>
          </div>
          <div>
            <Card/>
          </div>
        </Slider>
      </div>
    );
  }
}


const prateleira = ()=>{
    return (
      <VerticalMode/>
    )
}

export default prateleira;