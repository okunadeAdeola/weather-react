import React from 'react'
import team from "../assets/image/goal2.gif"
import background from "../assets/image/background.jpg"
import { Link, useNavigate } from 'react-router-dom'
const SignIn = () => {
  const navigate = useNavigate();
  const submit = ()=>{
    let data = localStorage.getItem('user')
    console.log(data);
    let inp1 = document.getElementsByClassName('input1')[0].value
    let inp2 = document.getElementsByClassName('input2')[0].value    
    const userData = JSON.parse(localStorage.getItem('user'));
    const foundUser = userData.find(user => user.email === inp1 && user.password === inp2);
    console.log(foundUser);
    if (foundUser) {
      alert('Login Successfully'
        )
          setTimeout(() => {
            alert.style.display = 'none'
          }, 3000)
      navigate('/dashboard');
    } else{
      alert("Invalid email or password")
     }
   document.getElementsByClassName('input1')[0].value = ''
   document.getElementsByClassName('input2')[0].value = ''

  }
  return (
    <>
           <img src={background} style={{width:"100%",height:"100%",position:"absolute",zIndex:"-1"}} alt="" /> 
      <div className='container-fluid d-flex'>
        <div className='col-6 sm-12 align-items-center'>
        <img src={team} style={{width:"70%", height:"110%", marginLeft:"10%", paddingTop:"10%"}} alt="" />
        </div>
        <div className='col-6 sm-12 text-center mt-5 '>
        <div class="container">
        <div class="card">
            <a class="singup">Login</a>
            <div style={{display:"none"}} className='errMsg'>Kindly input something</div>
            <div class="inputBox1">
                <input type="text" required="required" className='input1'></input>
                <span class="user">Email</span>
            </div>

            <div class="inputBox">
                <input type="password" required="required" className='input2'></input>
                <span>Password</span>
            </div>

            <button class="enter" onClick={submit}>Enter</button>
            <p>Don't have account yet? <Link to="/signup">Sign up now</Link></p>
        </div>
    </div>
        </div>
      </div>
    </>
  )
}

export default SignIn
