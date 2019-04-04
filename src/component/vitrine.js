import React, {Fragment} from 'react';
import CollapseContent from './CollapseContent'

import Prateleira from './prateleira'


const vitrine = ()=>{
    return (
      <Fragment>
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