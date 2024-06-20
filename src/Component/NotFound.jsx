import React from 'react'
import background from "../assets/image/background.jpg"
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <>
          <img src={background} style={{width:"100%",height:"100%",position:"absolute",zIndex:"-1"}} alt="" />
          <div><Link to="/signup">Back</Link></div><br />
        <div className='text-center'>
          <h2 style={{fontSize:"70px"}} className='text-center'>Page Not Found</h2>
          <img src="" alt="" />
          <div style={{fontSize: "20px"}}>Looks like you have lost your way.<br />Click the below button to go back </div>
          <Link to="/"><button className='button3'>Go Back</button></Link>
        </div>
    </>
  )
}

export default NotFound
