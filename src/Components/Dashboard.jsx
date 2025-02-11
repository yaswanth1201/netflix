import React from 'react'
import Sidenav from './Sidenav'
import Content from './Content'
import { Row,Col} from 'react-bootstrap'

function Dashboard() {
  return (
    <div className="container-fluid dash" style={{backgroundColor:'black'}}>

       <div className=' sidenav'>
       <Row>
       <Col md={2} >
      <Sidenav/>
      </Col>
            <Col md={10}>
            <Content/>
            </Col>
            
        </Row>
      
   </div>
    </div>
  )
}

export default Dashboard
