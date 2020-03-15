import React from 'react';
import './Style.scss';
import Banner1 from '../../img/b1.jpg'
import Banner2 from '../../img/b2.jpg'




class Slide extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            array:[{
                text1: 'Aliquam Consequat',
                text2: 'Fruits',
                text3: '$26.00',
                text4: '$262.00',
            }]
        }
    }

    setActive = (value) => {
        this.setState({
            value: value
        });
    }

    render() {
        var { value, array } = this.state;
        var element=array.map((array,index)=>{
        return  <div className='col-lg-auto col-md-auto col-sm-auto col-11 p-2 ' id='screen576' key={index}>
                    {/* item 1.1 */}
                    <div id='divHover'>
                        <div id='bgImg'>
                            <div><span style={{ float: 'right', margin: '10px', padding: '5px 5px', color: 'white', borderRadius: '10px', background: '#40a944' }}>SALE</span></div>
                            <div className='listIcon'>
                                <span className='spanIcon' ><i className='fas fa-shopping-cart' style={{ fontSize: '15px' }}></i></span>
                                <span className='spanIcon' style={{ margin: '5px 5px' }} ><i className='fas fa-search' style={{ fontSize: '15px' }}></i></span>
                                <span className='spanIcon' ><i className='far fa-heart' style={{ fontSize: '15px' }}></i></span>
                                <span className='spanIcon' style={{ marginLeft: '5px' }}><i className='fas fa-sync-alt' style={{ fontSize: '15px' }}></i></span>
                            </div>
                        </div>
                        <div id='ahover' style={{ marginTop: '15px', marginBottom: '30px' }}>
                             <h5><a href='/'> {array.text1}</a></h5>
                            <p><a href='/'>{array.text2}</a></p>
                            <h6 ><span style={{ color: '#40a944' }}>{array.text3}</span> <span style={{ textDecoration: 'line-through' }}>{array.text4}</span></h6>
                        </div>
                    </div>
                    {/* item 1.2 */}
                    <div id='divHover'>
                        <div id='bgImg'>
                            <div><span style={{ float: 'right', margin: '10px', padding: '5px 5px', color: 'white', borderRadius: '10px', background: '#40a944' }}>SALE</span></div>
                            <div className='listIcon'>
                                <span className='spanIcon' ><i className='fas fa-shopping-cart' style={{ fontSize: '15px' }}></i></span>
                                <span className='spanIcon' style={{ margin: '5px 5px' }} ><i className='fas fa-search' style={{ fontSize: '15px' }}></i></span>
                                <span className='spanIcon' ><i className='far fa-heart' style={{ fontSize: '15px' }}></i></span>
                                <span className='spanIcon' style={{ marginLeft: '5px' }}><i className='fas fa-sync-alt' style={{ fontSize: '15px' }}></i></span>
                            </div>
                        </div>
                        <div id='ahover' style={{ marginTop: '15px', marginBottom: '30px' }}>
                            <h5><a href='/'> Aliquam Consequat</a></h5>
                            <p><a href='/'>Fruits</a></p>
                            <h6 ><span style={{ color: '#40a944' }}>$26.00</span> <span style={{ textDecoration: 'line-through' }}>$262.00</span></h6>
                        </div>
                    </div>
                </div>
        })
        return (
            <div>  
            <div className='container mt-5'>
                <div className='row'>
                    {/* phan 1 */}
                    <div className='col-12 text-center'>
                        <p style={{ color: '#8f8f8f' }}><b><i>Recently added our store</i></b></p>
                    </div>
                    <div className='col-12 text-center'>
                        <h2><b>Trending Products</b></h2>
                    </div>
                    {/* phan 2 */}
                    <div className='col-12 text-center mt-3 mb-4'>
                        <div className='row justify-content-center'>
                            <div className={(value === 1 ? 'col-lg-2 col-md-2 col-sm-3 col-4 Active' : 'col-lg-2 col-md-2 col-sm-3 col-4 Disable')} onClick={() => this.setActive(1)} >
                                VEGETABLES
                            </div>
                            <div className={(value === 2 ? 'col-lg-2 col-md-2 col-sm-3 col-4 Active' : 'col-lg-2 col-md-2 col-sm-3 col-4 Disable')} onClick={() => this.setActive(2)} >
                                FRUITS
                            </div>
                            <div className={(value === 3 ? 'col-lg-2 col-md-2 col-sm-3 col-4 Active' : 'col-lg-2 col-md-2 col-sm-3 col-4 Disable')} onClick={() => this.setActive(3)}>
                                SALADS
                            </div>
                        </div>
                    </div>
                    {/* phan 3 */}
                    <div className='col-12 trending'>
                        <div className='row text-center m-0' style={{ overflowY: 'auto', height: '678px', width: '100%', flexDirection: 'column', lineHeight: '10px' }}>
                            {/* item1 */}
                            { element }
                            {/* item 2 */}
                            { element }
                            {/* item 3 */}
                            { element }
                            {/* item 4 */}
                            { element }
                            {/* item 5 */}
                            { element }
                        </div>
                    </div>
                    {/* banner */}
                    <div className='col-12'>
                        <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-6 col-12 mb-3' >
                            <img alt='' src={Banner1} style={{maxWidth:'100%'}}></img>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6 col-12' >
                             <img alt='' src={Banner2} style={{maxWidth:'100%'}}></img>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        );
    }
}

export default Slide;
