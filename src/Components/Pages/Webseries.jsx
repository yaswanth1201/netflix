import React from 'react'
import { Wdata } from '../Data/Webseriesdata'
import Sidenav from '../Sidenav'
import { Row,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Webseries(){
    return(
    <div className="container-fluid webseries" style={{backgroundColor:'black',}}>
        <Row>
            <Col md={2}>
            <Sidenav/>
            </Col>
            <Col md={10}>
            <div className='web2'>
             {   
                Wdata.map((x)=>{
                    return(
                        <div>
                            <p>{x.Id}</p>
                            <Link className='cinema' to={`/webseries/${x.Id}`}>
                            <img src={x.Image} alt="" style={{width:'250px',height:'300px',borderRadius:'7px'}}/></Link>
                            <p>{x.Season}</p>  
                            <p>{x.Rating}</p>
                        </div>    
                           
                    )
                })
             }
             

                
            </div>
            </Col>
        </Row>
    </div>
    )

}
export default Webseries
