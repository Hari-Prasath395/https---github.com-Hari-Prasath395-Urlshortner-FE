

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/user/signin', formData);

      if (response.data.status === 'Success') {

        
        console.log('Login successful');
        toast.success('Login successful!');
        navigate('/urlshortner');
        // Redirect to the main page or perform other actions
      } else {
        console.log(response.data.message);
        toast.error('Invalid credentials entered!');
      }
    } catch (error) {
      console.log('An error occurred while logging in:', error);
      toast.error('An error occurred while logging in');
    }
  };

  return (
    <div className="login-container">
      <div className="card">
        <h3>MEMBER LOGIN</h3>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Username"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <button className="button" type="submit">
            Login
          </button>
        </form>
        <div>
          <Link to="/Signup" className="linkRegister">
            <p>Register to login if the account does not exist</p>
          </Link>
        </div>
        <div>
        <Link to="/request-password-reset" className='text-center'><p>Forgot Password?</p></Link>
        </div>
      </div>
    </div>
  );
};


export default Login;
