import React, {Fragment} from 'react';
import Prateleira from './prateleira'


const vitrine = ()=>{
    return (
      <Fragment>
        <Prateleira nome="promocao"/>
        {/* <Prateleira nome={'comprados'}/>
        <Prateleira nome={'favoritos'}/> */}
      </Fragment>
    )
}

export default vitrine;