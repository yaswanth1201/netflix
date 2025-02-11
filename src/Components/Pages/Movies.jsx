import React from 'react'
import { Mdata } from '../Data/Moviesdata'
import Sidenav from '../Sidenav'
import { Row,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Movies() {
  return (
    <div className='container-fluid movies' style={{backgroundColor:'black'}}>
      <Row>
        <Col md={2}>
        <Sidenav/>
        </Col>
        <Col md={10}> 
    < div className='movies2'>
      {
        Mdata.map((e)=>{
            return(
                <div >
                    <p>{e.Id}</p>
                    <Link className='cinema' to={`/movies/${e.Id}`}>
                    <img src={e.Image} alt="" style={{width:'250px',height:'300px',borderRadius:'7px'}}/></Link>
                    <p>{e.Name}</p>
                  
                </div>
            )
        })
      }
    </div></Col>
      </Row>
      
    </div>
  )
}

export default Movies
