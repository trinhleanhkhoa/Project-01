import React from 'react'
import './Style.scss'


export default class Deals extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [
                {
                    text1: 'Răng Súng',
                    text2: '11/04/1999',
                    text3: '$0',
                    text4: '$999999999',
                }
            ]
        }
    }
    render() {
        var element = this.state.array.map((Array, index) => {
            return <div className='col-lg-auto col-md-auto col-sm-5 col-12 ' id='screen576' key={index}>
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
                        <h5><a href='/'>{Array.text1} </a></h5>
                        <p><a href='/'>{Array.text2}</a></p>
                        <h6 ><span style={{ color: '#40a944' }}>{Array.text3}</span> <span style={{ textDecoration: 'line-through', color: 'red' }}>{Array.text4}</span></h6>
                    </div>
                </div>
            </div>
        })
        return (
            <div className='container-fluid mt-5'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <p style={{ color: '#8f8f8f' }}><b><i>Recently added our store</i></b></p>
                    </div>
                    <div className='col-12 text-center mb-3'>
                        <h2><b>Deals Of The Weeks</b></h2>
                    </div>
                    <div className='col-12 deals'>
                        <div className='row text-center m-0' style={{ overflowY: 'auto', height: '395px', width: '100%', flexDirection: 'column', lineHeight: '10px' }}>
                            {element}
                            {element}
                            {element}
                            {element}
                            {element}


                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='bgImg4'>
                            <div className='container' style={{ position: 'relative', top: '70px' }}>
                                <h1>BLACK FRIDAYS !</h1>
                                <h2 style={{ lineHeight: '35px', color: '#6c6c6c' }}>SALE 50% OFF</h2>
                                <p style={{ marginBottom: '35px', color: '#8f8f8f' }}>ALL VEGETABLE PRODUCTS</p>
                                <a href='/' >DISCOVER NOW</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}