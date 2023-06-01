import React, { useState } from 'react'
import Navbar from '../Component/Navbar'
import './LoginReg.css'
import { Link, useNavigate } from 'react-router-dom'
const Login = () => {

  const empty = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const [loginInputs, setLoginInputs] = useState(empty);
  const handleClick = (event) => {
    const { name, value } = event.target;
    setLoginInputs({ ...loginInputs, [name]: value });
  };
  const loginBtn = async () => {
    if (loginInputs.email === "" || loginInputs.password === "") {
      alert("please enter data in both fields");
    } else {
      let record = await fetch("http://127.0.0.1:4000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginInputs),
      });
      record = await record.json();
      if (record.message === "login successfully") {
        sessionStorage.setItem("user", record.userDetails._id);
        sessionStorage.setItem("useremail", record.userDetails.email);
        navigate("/dashboard/DashboardActivitiesRecord");
        // navigate("/dashboard");
        setLoginInputs(empty);
      } else {
        alert("Email or password is Wrong!");
      }
    }
  };

  return (
    <>
      <Navbar />

      <div className='bg-img'>
            <div className="login-box">
              <p>Login</p>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="user-box">
                  <input required name="email" type="email" onChange={handleClick} value={loginInputs.email}/>
                  <label>Email</label>
                </div>
                <div className="user-box">
                  <input required name="password" type="password" onChange={handleClick} value={loginInputs.password}/>
                  <label>Password</label>
                </div>
                <Link onClick={loginBtn}>
                  <span />
                  <span />
                  <span />
                  <span />
                  Submit
                </Link>
              </form>
              <p>Don't have an account? <Link to='/register' className="a2">Sign up!</Link></p>
            </div>
      </div>




    </>
  )
}

export default Login
