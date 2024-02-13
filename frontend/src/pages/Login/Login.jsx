// import React from 'react';
// import { Input } from 'antd'
// import './Login.css'
// import {logo} from '../../components/Navbar/Navbar.jsx';

// const Login = () => {
//   {
//     const loginText = document.querySelector(".title-text .login");
//     const loginForm = document.querySelector("form.login");
//     const loginBtn = document.querySelector("label.login");
//     const signupBtn = document.querySelector("label.signup");
//     const signupLink = document.querySelector("form .signup-link a");
//     signupBtn.onclick = () => {
//       loginForm.style.marginLeft = "-50%";
//       loginText.style.marginLeft = "-50%";
//     };
//     loginBtn.onclick = () => {
//       loginForm.style.marginLeft = "0%";
//       loginText.style.marginLeft = "0%";
//     };
//     signupLink.onclick = () => {
//       signupBtn.Click();
//       return false;
//     };
//   }

//   return (
//     <div className='Login'>

//       <div className="wrapper">
//         <div className="title-text">
//           {logo}
//         </div>
//         <div className="form-container">
//           <div className="slide-controls">
//             <Input type="radio" name="slide" id="login" checked />
//             <Input type="radio" name="slide" id="signup" />
//             <label for="login" className="slide login">Login</label>
//             <label for="signup" className="slide signup">Signup</label>
//             <div className="slider-tab"></div>
//           </div>
//           <div className="form-inner">
//             <form action="#" class="login">
//               <div className="field">
//                 <Input type="text" placeholder="Email Address" required />
//               </div>
//               <div className="field">
//                 <Input type="password" placeholder="Password" required />
//               </div>
//               {/* <div className="pass-link"><a href="#">Forgot password?</a></div> */}
//               <div className="field btn">
//                 <div className="btn-layer"></div>
//                 <Input type="submit" value="Login" />
//               </div>
//               <div className="signup-link">Not a member? <a href="#">Signup now</a></div>
//             </form>
//             <form action="#" class="signup">
//               <div className="field">
//                 <Input type="text" placeholder="Email Address" required />
//               </div>
//               <div className="field">
//                 <Input type="password" placeholder="Password" required />
//               </div>
//               <div className="field">
//                 <Input type="password" placeholder="Confirm password" required />
//               </div>
//               <div className="field btn">
//                 <div className="btn-layer"></div>
//                 <Input type="submit" value="Signup" />
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>

//   )
// }

// export default Login

import React, { useState } from 'react';
import { Input, Tabs } from 'antd';
import './Login.css';
import { logo } from '../../components/Navbar/Navbar.jsx';

const { TabPane } = Tabs;

const Login = () => {
  const [activeTab, setActiveTab] = useState('login');

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  return (
    <div className='Login'>
      <div className="wrapper">
        <div className="title-text">
          {logo}
        </div>
        <div className="form-container">
          <Tabs activeKey={activeTab} onChange={handleTabChange}>
            <TabPane tab="Login" key="login">
              <form action="#" className="login">
                <div className="field">
                  <Input type="text" placeholder="Email Address" required />
                </div>
                <div className="field">
                  <Input type="password" placeholder="Password" required />
                </div>
                <div className="field btn">
                  <div className="btn-layer"></div>
                  <Input type="submit" value="Login" />
                </div>
                <div className="signup-link">You Don't have Account <a href="#" onClick={() => handleTabChange('signup')}>Signup now</a></div>
              </form>
            </TabPane>
            <TabPane tab="Signup" key="signup">
              <form action="#" className="signup">
                <div className="field">
                  <Input type="text" placeholder="Email Address" required />
                </div>
                <div className="field">
                  <Input type="password" placeholder="Password" required />
                </div>
                <div className="field">
                  <Input type="password" placeholder="Confirm password" required />
                </div>
                <div className="field btn">
                  <div className="btn-layer"></div>
                  <Input type="submit" value="Signup" />
                </div>
              </form>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Login;

