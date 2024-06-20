import React from 'react'
import background from "../assets/image/background.jpg"
import { Link } from 'react-router-dom'
const Home = () => {
  
  return (
    <>
       <img src={background} style={{width:"100%",height:"100%",position:"absolute",zIndex:"-1"}} alt="" /> 
        <Link to="/signup"><button className='button'>Sign Up</button></Link>
        <Link to="/signin"><button className='button1'>Login</button></Link>
        <div className='home'>
          <h1 style={{fontSize:"70px"}}>Local Weather App</h1><br/>
          <div style={{fontSize: "20px"}}>Real-time forecast, tide infomation, and fishing conditions. <br />Empowering anglers with accurate weather data for <br />successful trip</div>
          <Link to="/signup"><button className='button3'>Get Started</button></Link>
        </div>
    </>
  )
}

export default Home
