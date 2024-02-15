
import React, { useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import './Login.css';

const Login = () => {
  useEffect(() => {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');
    
    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });
    
    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });
  }, [])

  return (
    <div className='login-total'>
      <div className="container" id="container">
        <div className="form-container sign-up">
            <Form>
                <h1>CREATE ACCOUNT</h1>
                <div className="social-icons">
                    <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
                <span>or use your email for registeration</span>
                <Input type="text" placeholder="Name" required/>
                <Input type="email" placeholder="Email" required/>
                <Input type="password" placeholder="Password" required/>
                <Input className='log-btn' type="submit" value="Sign Up"/>
                {/* <Button>Sign Up</Button> */}
            </Form>
        </div>
        <div className="form-container sign-in">
            <Form>
                <h1>LOGIN</h1>
                <div className="social-icons">
                    <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
                <span>or use your email password</span>
                <Input type="email" placeholder="Email" required/>
                <Input type="password" placeholder="Password" required/>
                <Input className='log-btn' type="submit" value="Login"/>
                {/* <Button>Login</Button> */}
            </Form>
        </div>
        <div className="toggle-container">
            <div className="toggle">
                <div className="toggle-panel toggle-left">
                    <h1>Welcome Back!</h1>
                    <p>Enter your personal details to use all of site features</p>
                    <Button className="hidden" id="login">Login</Button>
                </div>
                <div className="toggle-panel toggle-right">
                    <h1>Welcome, Friend!</h1>
                    <p>Enter your personal details to use all of site features</p>
                    <Button class="hidden" id="register">Sign Up</Button>
                </div>
            </div>
        </div>
      </div>
      </div>
  )
}

export default Login;








