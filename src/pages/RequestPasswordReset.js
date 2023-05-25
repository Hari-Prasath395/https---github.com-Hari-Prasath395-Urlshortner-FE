import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RequestPasswordReset = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/user/requestpasswordreset', {
        email,
        redirectUrl: 'http://localhost:3000/password-reset-success', // Set the redirect URL to your frontend password reset page
      });

      if (response.data.status === 'Failed') {
        console.log(response.data.message);
        toast.error(response.data.message);
      } else {
        console.log('Password reset email sent');
        toast.success('Password reset email sent! Please check your inbox');
        setEmail(''); // Clear the email field
      }
    } catch (error) {
      console.log('An error occurred while requesting password reset:', error);
      toast.error('An error occurred while requesting password reset');
    }
  };

  return (
    <div className="Reset-container">
      <div className="card">
        <h3 className="title mt-3">Request Password Reset</h3>
        <form className="Reset-form" onSubmit={handleSubmit}>
          <div className="Reset-form-group mt-4">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={handleEmailChange} />
          </div>
          <button className="Reset-button mt-3" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestPasswordReset;
