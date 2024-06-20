import React, { useState } from 'react';
import team from "../assets/image/goal2.gif";
import background from "../assets/image/background.jpg";
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [userDetails, setUserDetails] = useState([]);
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Required'),
    username: Yup.string().required('Required'),
    password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .max(15, 'Password is too long')
    .matches(/^(?=.*[a-z])/, 'Must contain one lowercase letter')
    .matches(/^(?=.*[A-Z])/, 'Must contain one uppercase letter')
    .matches(/^(?=.*[0-9])/, 'Must contain one number')
    .matches(/^(?=.*[!@#\$%\^&\*])/, 'Must contain one special character')
    .required('Required')
    });
    let details = []
    if (localStorage.user){
      let gottenInfo = JSON.parse(localStorage.user)
      details = gottenInfo
    }
  const submit = (values) => {
      
      const newUser = {
        email: values.email,
        username: values.username,
        password: values.password
      };
  console.log(newUser);
      details.push(newUser);
      console.log(details);
       localStorage.setItem('user', JSON.stringify(details));
      setUserDetails([...userDetails, newUser]);
    navigate('/signin');
  };

  return (
    <>
      <img src={background} style={{ width: "100%", height: "100%", position: "absolute", zIndex: "-1" }} alt="" />
      <div className='container-fluid d-flex'>
        <div className='col-6 sm-12 align-items-center'>
          <img src={team} style={{ width: "70%", height: "110%", marginLeft: "10%", paddingTop: "5%" }} alt="" />
        </div>
        <div className='col-6 sm-12 text-center mt-5 '>
          <div className="container">
            <div className="card">
              <h2 className="signup">Sign Up</h2>
              <Formik
                initialValues={{ email: '', username: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={submit}
              >
                {({ handleSubmit }) => (
                  <Form>
                    <div className="inputBox1">
                      <Field type="text" name="email" className='email' />
                      <label className="user">Email</label>
                      <ErrorMessage name="email" component="div" className="error" />
                    </div>

                    <div className="inputBox">
                      <Field type="text" name="username" className='user' />
                      <label>Username</label>
                      <ErrorMessage name="username" component="div" className="error" />
                    </div>

                    <div className="inputBox">
                      <Field
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        className='password'
                      />
                      <label>Password</label>
                      <ErrorMessage name="password" component="div" className="error" />
                      <p style={{marginLeft: "180px", marginTop: "-75px", cursor: "pointer", background: "none", color: "black", position: "stickly"}} onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? 'Hide' : 'Show'}
                      </p>
                    </div>

                    <button style={{marginTop: "50px"}} type="submit" className="enter" onClick={handleSubmit}>Enter</button>
                  </Form>
                )}
              </Formik>
              <div>
                <p>Already have an account? <span><Link to="/signin">Sign in now</Link></span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
