import React from 'react';
import './Style.scss';
import Icon1 from '../../img/icon1.jpg'
import Icon2 from '../../img/icon2.jpg'
import Icon3 from '../../img/icon3.jpg'
import Icon4 from '../../img/icon4.jpg'




class Contact extends React.Component {

    render() {
      
        return (
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-3 col-sm-6 col-12 d-flex'>
                            <div style={{padding:'7px 5px'}}>
                            <img alt='' src={Icon1}></img>
                            </div>
                            <div>
                                <h4 style={{color:'#6c6c6c'}}>30 Days Return</h4>
                                <p style={{color:'#8f8f8f'}}>Free shipping on all US order or order above $200</p>
                            </div>
                            
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-6 col-12 d-flex'>
                        <div style={{padding:'7px 5px'}}>
                            <img alt='' src={Icon2}></img>
                            </div>
                            <div>
                                <h4 style={{color:'#6c6c6c'}}>SUPPORT 24/7</h4>
                                <p style={{color:'#8f8f8f'}}>Contact us 24 hours a day, 7 days a week</p>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-6 col-12 d-flex'>
                        <div style={{padding:'7px 5px'}}>
                            <img alt='' src={Icon3}></img>
                            </div>
                            <div>
                                <h4 style={{color:'#6c6c6c'}}>30 DAYS RETURN</h4>
                                <p style={{color:'#8f8f8f'}}>Simply return it within 30 days for an exchange</p>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-6 col-12 d-flex'>
                        <div style={{padding:'7px 5px'}}>
                            <img alt='' src={Icon4}></img>
                            </div>
                            <div>
                                <h4 style={{color:'#6c6c6c'}}>100% PAYMENT</h4>
                                <p style={{color:'#8f8f8f'}}>We ensure secure payment with PEV</p>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Contact;
