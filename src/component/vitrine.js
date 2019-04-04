import React, {Fragment} from 'react';
import CollapseContent from './CollapseContent'

import Prateleira from './prateleira'


const vitrine = ()=>{
    return (
      <Fragment>
        <CollapseContent nome='Promoções'>
          <Prateleira nome="promocao"/>
        </CollapseContent>
      
        <CollapseContent nome='Comprados'>
         <Prateleira nome={'comprados'}/>
        </CollapseContent>
      
        <CollapseContent nome='Favoritos'>
           <Prateleira nome={'favoritos'}/>
        </CollapseContent>
        
      </Fragment>
    )
}

// const promocao = / 

export default vitrine;