import React from 'react';
import Footer from '../../component/Footer/index'
import Header from '../../component/Header';

 


class Blogs extends React.Component {

  render() {
    return (
      <div style={{overflow:'hidden'}}>
        {<Header/>}
          <h1>blogs</h1>
        { <Footer/> }
      </div>
    );
  }
}

export default Blogs;
