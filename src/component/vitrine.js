import React, {Fragment} from 'react';
import Axios from 'axios';
import CollapseContent from './CollapseContent'

import Prateleira from './prateleira'
const url = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=52cd47ed61eebd8f62bdf9d8922a64f8&hash=2d744ffccd666aacf33f89b0eefeeb06'
const request = ()=>{
  Axios.get(url)
    .then(res => {
      console.log(res);
      
    })
}

const vitrine = ()=>{
    return (
      <Fragment>
        <button onClick={()=> request()}>Clica em mim</button>
        <div>
        <CollapseContent nome='Promoções'>
          <Prateleira nome="promocao"/>
        </CollapseContent>
      </div>
      <div>
        <CollapseContent nome='Favoritos'>
           <Prateleira nome={'favoritos'}/>
        </CollapseContent>
      </div>
      <div>
        <CollapseContent nome='Comprados'>
         <Prateleira nome={'comprados'}/>
        </CollapseContent>
      </div>
      </Fragment>
    )
}

// const promocao = / 

export default vitrine;