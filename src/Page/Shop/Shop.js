import React from 'react';
import Header from '../../component/Header';
import Footer from '../../component/Footer/index'
import ShopLeftRight from '../../component/Shop';

 


class Shop extends React.Component {

  render() {
    return (
      <div style={{overflow:'hidden'}}>
        <Header/>
        <ShopLeftRight/>
        <Footer/>
      </div>
    );
  }
}

export default Shop;
