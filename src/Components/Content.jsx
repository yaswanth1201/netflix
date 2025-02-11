import React from 'react'
import Myimg from './Assets/moneyheist2.jpg'
import { Mdata } from './Data/Moviesdata'
import { Link } from 'react-router-dom'
import { Row,Col } from 'react-bootstrap'
import { Wdata } from './Data/Webseriesdata'




function Content() {
  const Mdata1 = Mdata.slice(0,4)
  const Wdata1 = Wdata.slice(0,4)
  return (
    <div className='containerfluid'>
       <Row>
      <div className=' static'>
        <Col sm={4}>
           <div className='matter '>
      
            <h4> <span className='n'>N   </span>series</h4>
            <h1 className='mheist'>MONEY <span className='heist'>HEIST</span> </h1>
            <p className='part'>P A R T - 4</p>
            <p><span className='imdb'>IMDB</span>8.8/10</p>
            <p><span className='2b'style={{color:'red'}}>2b+</span> Streams</p>
            <button className='pbutton'>play</button>
            <button className='tbutton'>watch later </button>


            </div>   
         </Col>
         <Col sm={8}>
      <div className='moneyheist '>
        <img src={Myimg} alt="" />
       </div>
       </Col>
       </div>
       </Row>
       <h1 className='rweda'style={{fontsize:'15px',fontWeight:'900',color:'white'}}>Popular Movies</h1>
      <div className=' movies1'>
      
            {
              Mdata1.map((e)=>{
                  return(
                      <div>
                          {/* <p>{e.Id}</p> */}
                          <img src={e.Image} alt="" style={{width:'250px', height:'300px'}}/>
                          <p>{e.Name}</p>
                      
                      </div>
                  )
              })
            }
          
          </div>
          <Link to='/movies'><button>viewall</button></Link>
          <h1 className='rweda'style={{fontsize:'15px',fontWeight:'900',color:'white'}}>Popular Webseries</h1>
        <div className='web1'>
          {
             Wdata1.map((x)=>{
                   return(
                      <div>
                          <img src={x.Image} alt="" style={{width:'250px',height:'300px',borderRadius:'7px'}}/> 
                      </div> 
                  )   
              })
            }
            </div>  
            <Link to='/webseries'><button>viewall</button></Link>
    </div>

  )
}

export default Content
