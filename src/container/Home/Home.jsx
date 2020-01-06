import React, {Component} from 'react';
import Product from '../Product/Product';


class Home extends Component{
  render (){
    return(
    <div>
      <p>Counter</p>
        <hr />
       <Product />
    </div>
  )
}
}

export default Home;