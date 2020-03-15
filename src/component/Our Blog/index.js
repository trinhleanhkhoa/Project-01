import React from 'react'
import './Style.scss'
import Blog1 from '../../img/blog1.jpg'
import Blog2 from '../../img/blog2.jpg'
import Blog3 from '../../img/blog3.jpg'



export default class OurBlog extends React.Component{
    render(){
        return(
            <div className='container-fluid pt-3 mt-5' style={{background:'#f4f4f4'}}>
            <div className='container mt-5' >
            <div className='row'>
                <div className='col-12 text-center'>
                    <p style={{ color: '#8f8f8f' }}><b><i>Recently added our store</i></b></p>
                </div>
                <div className='col-12 text-center mb-3'>
                    <h2><b>Our Blog Posts</b></h2>
                </div>
                <div className='col-12 ourBlog'>
                    <div className='row  m-0 mb-5' style={{ overflowY: 'auto', height: '478px', width: '100%', flexDirection: 'column' }}>   
                     <div className='col-lg-4 col-md-4 col-sm-6 col-12'>
                        <div className=' bg-white'>
                        <img src={Blog1} alt='' className='w-100'></img>
                        <div className='p-2' >
                        <p className='mt-3 mb-4'>18/01/2019 |<span><a href='/'>   dsdsdsas</a></span></p>
                        <h5><a href='/'><b>Maxime Laborum Voluptas Minus, Est, Unde Eaque Esse Tenetur.</b></a></h5>
                        <h5 className='pt-3 mb-3'><a href='/'>SHOW MORE <i className="fas fa-play-circle" style={{color:'#40a944'}}></i></a></h5>
                        </div>
                        </div>
                     </div>
                     <div className='col-lg-4 col-md-4 col-sm-6 col-12'>
                        <div className=' bg-white'>
                        <img src={Blog2} alt='' className='w-100'></img>
                        <div className='p-2' >
                        <p className='mt-3 mb-4'>18/01/2019 |<span><a href='/'>   dsdsdsas</a></span></p>
                        <h5><a href='/'><b>Maxime Laborum Voluptas Minus, Est, Unde Eaque Esse Tenetur.</b></a></h5>
                        <h5 className='pt-3 mb-3'><a href='/'>SHOW MORE <i className="fas fa-play-circle" style={{color:'#40a944'}}></i></a></h5>
                        </div>
                        </div>
                     </div>
                     <div className='col-lg-4 col-md-4 col-sm-6 col-12'>
                        <div className=' bg-white'>
                        <img src={Blog3} alt='' className='w-100'></img>
                        <div className='p-2' >
                        <p className='mt-3 mb-4'>18/01/2019 |<span><a href='/'>   dsdsdsas</a></span></p>
                        <h5><a href='/'><b>Maxime Laborum Voluptas Minus, Est, Unde Eaque Esse Tenetur.</b></a></h5>
                        <h5 className='pt-3 mb-3'><a href='/'>SHOW MORE  <i className="fas fa-play-circle" style={{color:'#40a944'}}></i></a></h5>
                        </div>
                        </div>
                     </div>
                        
                    </div>
                </div>
            </div>
        </div>
        </div>
        )
    }
}