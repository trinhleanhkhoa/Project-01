import React from 'react';
import Footer from '../../component/Footer/index'
import Header from '../../component/Header';

 


class Contact extends React.Component {

  render() {
    return (
      <div style={{overflow:'hidden'}}>
        <Header/>
          <h1>contact</h1>
        { <Footer/> }
      </div>
    );
  }
}

export default Contact;
