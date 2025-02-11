import React from 'react'
import { useParams } from 'react-router-dom'
import { Wdata } from '../Data/Webseriesdata'

function Webdetails() {
    let { Id } = useParams()
    let webdet = Wdata.find((item) => item.Id == Id)
  return (
    
      <div>
      < div className='container-fluid '>
                      <div className=''>
                          <p>{webdet.Id}</p>
                          <img src={webdet.Image} alt="" style={{width:'200px',borderRadius:'5px'}}/>
                          <p>{webdet.Name}</p>
                          <p>{webdet.duration}</p>
                          <p>{webdet.Rating}</p>
                          {/* <button onClick={() => setCart(Cart + Moviedet.Image)}>add to wishlist</button>                         */}
                      </div>
          </div>
    </div>
    
  )
}

export default Webdetails
