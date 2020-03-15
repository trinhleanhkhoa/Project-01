import React from 'react';
import './Style.scss';
import BS from '../../img/bs.jpg'




class BestSellers extends React.Component {


    render() {

        return (
            <div className='container mt-5'>
                <div className='row'>
                    {/* phan 1 */}
                    <div className='col-12 text-center'>
                        <p style={{ color: '#8f8f8f' }}><b><i>Recently added our store</i></b></p>
                    </div>
                    <div className='col-12 text-center'>
                        <h2><b>Best Sellers</b></h2>
                    </div>
                    <div className='col-12 mt-3'>
                        <div className='row'>
                            <div className='col-lg-4 col-md-3 col-sm-12 col-12 text-center mb-5 d-none d-lg-block'>
                                <img alt='' src={BS} style={{maxWidth:'100%'}}></img>
                            </div>
                            <div className='col-lg-8 col-md-12 col-sm-12 col-12 '>
                                <div className='row' id='bestSellers' style={{flexDirection:'column',height:'490px',width:'100%',overflowX:'auto'}}>
                                    <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                                        
                                            <div className="media mb-3" id='khoi'>
                                                {/* <img class="mr-3" src={BS2} alt="Generic placeholder image" style={{ width: '35%' }}></img> */}
                                                <div id='bgImg'></div>
                                                <div className="media-body ml-3">
                                                    <h5 className="mt-0"><a href='/'>Donec Non Est</a></h5>
                                                    <p><a href='/'>Fruits</a></p>
                                                    <h5 ><span style={{ color: '#40a944' }}>$26.00</span> <span style={{ textDecoration: 'line-through' }}>$262.00</span></h5>
                                                    <div className='listIcon text-center'>
                                                        <span className='spanIcon' ><i className='fas fa-shopping-cart' ></i></span>
                                                        <span className='spanIcon' style={{ margin: '5px 5px' }} ><i className='fas fa-search' ></i></span>
                                                        <span className='spanIcon' ><i className='far fa-heart' ></i></span>
                                                        <span className='spanIcon' style={{ marginLeft: '5px' }}><i className='fas fa-sync-alt' ></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                      
                                      <div className="media mb-3" id='khoi'>
                                                {/* <img class="mr-3" src={BS2} alt="Generic placeholder image" style={{ width: '35%' }}></img> */}
                                                <div id='bgImg'></div>
                                                <div className="media-body ml-3">
                                                    <h5 className="mt-0"><a href='/'>Donec Non Est</a></h5>
                                                    <p><a href='/'>Fruits</a></p>
                                                    <h5 ><span style={{ color: '#40a944' }}>$26.00</span> <span style={{ textDecoration: 'line-through' }}>$262.00</span></h5>
                                                    <div className='listIcon text-center'>
                                                        <span className='spanIcon' ><i className='fas fa-shopping-cart' ></i></span>
                                                        <span className='spanIcon' style={{ margin: '5px 5px' }} ><i className='fas fa-search' ></i></span>
                                                        <span className='spanIcon' ><i className='far fa-heart' ></i></span>
                                                        <span className='spanIcon' style={{ marginLeft: '5px' }}><i className='fas fa-sync-alt' ></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="media mb-3" id='khoi'>
                                                {/* <img class="mr-3" src={BS2} alt="Generic placeholder image" style={{ width: '35%' }}></img> */}
                                                <div id='bgImg'></div>
                                                <div className="media-body ml-3">
                                                    <h5 className="mt-0"><a href='/'>Donec Non Est</a></h5>
                                                    <p><a href='/'>Fruits</a></p>
                                                    <h5 ><span style={{ color: '#40a944' }}>$26.00</span> <span style={{ textDecoration: 'line-through' }}>$262.00</span></h5>
                                                    <div className='listIcon text-center'>
                                                        <span className='spanIcon' ><i className='fas fa-shopping-cart' ></i></span>
                                                        <span className='spanIcon' style={{ margin: '5px 5px' }} ><i className='fas fa-search' ></i></span>
                                                        <span className='spanIcon' ><i className='far fa-heart' ></i></span>
                                                        <span className='spanIcon' style={{ marginLeft: '5px' }}><i className='fas fa-sync-alt' ></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                                    <div className="media mb-3" id='khoi'>
                                                {/* <img class="mr-3" src={BS2} alt="Generic placeholder image" style={{ width: '35%' }}></img> */}
                                                <div id='bgImg'></div>
                                                <div className="media-body ml-3">
                                                    <h5 className="mt-0"><a href='/'>Donec Non Est</a></h5>
                                                    <p><a href='/'>Fruits</a></p>
                                                    <h5 ><span style={{ color: '#40a944' }}>$26.00</span> <span style={{ textDecoration: 'line-through' }}>$262.00</span></h5>
                                                    <div className='listIcon text-center'>
                                                        <span className='spanIcon' ><i className='fas fa-shopping-cart' ></i></span>
                                                        <span className='spanIcon' style={{ margin: '5px 5px' }} ><i className='fas fa-search' ></i></span>
                                                        <span className='spanIcon' ><i className='far fa-heart' ></i></span>
                                                        <span className='spanIcon' style={{ marginLeft: '5px' }}><i className='fas fa-sync-alt' ></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="media mb-3" id='khoi'>
                                                {/* <img class="mr-3" src={BS2} alt="Generic placeholder image" style={{ width: '35%' }}></img> */}
                                                <div id='bgImg'></div>
                                                <div className="media-body ml-3">
                                                    <h5 className="mt-0"><a href='/'>Donec Non Est</a></h5>
                                                    <p><a href='/'>Fruits</a></p>
                                                    <h5 ><span style={{ color: '#40a944' }}>$26.00</span> <span style={{ textDecoration: 'line-through' }}>$262.00</span></h5>
                                                    <div className='listIcon text-center'>
                                                        <span className='spanIcon' ><i className='fas fa-shopping-cart' ></i></span>
                                                        <span className='spanIcon' style={{ margin: '5px 5px' }} ><i className='fas fa-search' ></i></span>
                                                        <span className='spanIcon' ><i className='far fa-heart' ></i></span>
                                                        <span className='spanIcon' style={{ marginLeft: '5px' }}><i className='fas fa-sync-alt' ></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        <div>
                                        <div className="media mb-3" id='khoi'>
                                                {/* <img class="mr-3" src={BS2} alt="Generic placeholder image" style={{ width: '35%' }}></img> */}
                                                <div id='bgImg'></div>
                                                <div className="media-body ml-3">
                                                    <h5 className="mt-0"><a href='/'>Donec Non Est</a></h5>
                                                    <p><a href='/'>Fruits</a></p>
                                                    <h5 ><span style={{ color: '#40a944' }}>$26.00</span> <span style={{ textDecoration: 'line-through' }}>$262.00</span></h5>
                                                    <div className='listIcon text-center'>
                                                        <span className='spanIcon' ><i className='fas fa-shopping-cart' ></i></span>
                                                        <span className='spanIcon' style={{ margin: '5px 5px' }} ><i className='fas fa-search' ></i></span>
                                                        <span className='spanIcon' ><i className='far fa-heart' ></i></span>
                                                        <span className='spanIcon' style={{ marginLeft: '5px' }}><i className='fas fa-sync-alt' ></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default BestSellers;
