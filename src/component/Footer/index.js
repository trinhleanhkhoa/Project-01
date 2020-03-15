import React from 'react'
import './Style.scss'


export default class MostView extends React.Component {

    render() {
        
        return (
            <div style={{background:'rgb(244, 244, 244)'}}>
            <div className='container mt-5 pt-5' >
                <div className='row footer'> 
               <div className="col-lg-4 col-md-8 col-sm-8 col-12 raGiua1 mb-5 ">
                        <h2 > I'AM SAD</h2>
                        <h5 className='mt-3' style={{color:'#6c6c6c'}}>ha haha haha h hahahaahahahahahahaahahahah h hahah haaha hahahah ahahah haaha ha hah ahaha </h5>
                        <p className='m-0 mb-1'style={{color:'#6c6c6c'}}><b> Address:</b> 83 Ton Dan, District 4, HCM City</p>
                        <p className='m-0 mb-1' style={{color:'#6c6c6c'}}><b> Email:</b> Vankiet.kn78@gmail.com</p>
                        <p className='m-0 mb-1' style={{color:'#6c6c6c'}}><b> Call me: 037 7871 681</b></p>
               </div>
               <div className='col-lg-2 col-md-4 col-sm-4 col-12 raGiua mb-5'>
                    <h4 >Information</h4>
                    <p className='m-0 mt-3 mb-1'><a href='./'>About Us</a></p>
                    <p className='m-0 mb-1'><a href='./'>Delivery Information</a></p>
                    <p className='m-0 mb-1'><a href='./'>Privacy Policy</a></p>
                    <p className='m-0 mb-1'><a href='./'>Terms & Conditions</a></p>
                    <p className='m-0 mb-1'><a href='./'>Contact Us</a></p>
                    <p className='m-0 mb-1'><a href='./'>Site Map</a></p>
                </div>
                <div className='col-lg-2 col-md-3 col-sm-4 col-12 raGiua  mb-5'>
                    <h4 >Extras</h4>
                    <p className='m-0 mt-3'><a href='./'>Brands</a></p>
                    <p className='m-0 mb-1'><a href='./'>Gift Certificates</a></p>
                    <p className='m-0 mb-1'><a href='./'>Affiliate</a></p>
                    <p className='m-0 mb-1'><a href='./'>Specials</a></p>
                    <p className='m-0 mb-1'><a href='./'>Returns</a></p>
                    <p className='m-0 mb-1'><a href='./'>Order History</a></p>
                </div>
                <div className='col-lg-4 col-md-9 col-sm-8 col-12'>
                    <h4 >Sign Up Newsletter</h4>
                    <p className='m-0 mt-3 mb-3' style={{color:'#6c6c6c'}}>Get updates by subscribe our weekly newsletter</p>
                    <div className='form-group'>
                        <input className='form-control' placeholder=' Enter your mail' style={{height:'50px',borderRadius:'20px'}}></input>
                        <button className='btn btn-success' style={{height:'50px',position:'relative',top:'-50px',float:'right',borderRadius:'0 20px 20px 0'}}>Subscribe</button>
                    </div>
                </div>
                </div>
            </div>
            {/* phan 2 */}
            <div className='container-fluid pb-3 pt-5' style={{background:'#40a944'}}>
                <div className='container'>
            <div className='row'>
                <div className='col-12 text-center'>
                        <h6 className='text-white'>Copyright © 2020 Safira . All Rights Reserved.Design By Safira</h6>
                </div>
                
                </div>
                </div>
                </div>
            </div>
        )
    }
}