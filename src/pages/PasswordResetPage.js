import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const PasswordResetPage = () => {
  const { userId, resetString } = useParams();
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    // Perform any necessary checks or validations when the component mounts
    // ...
  }, []);

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/user/resetPassword', {
        userId,
        resetString,
        newPassword,
      });
      if (response.status === 200) {
        // Password reset was successful
        toast.success(response.data.message);
        console.log('Password reset successfully');
        setNewPassword("");
       
        // Redirect to the login page or perform any other necessary actions
        // ...
      } else {
        // Password reset failed
        toast.error(response.data.message);
        console.log('An error occurred while resetting the password:');
      }
    } catch (error) {
      console.log(error);
      toast.error('An error occurred during password reset');
    }
  };

  return (
    <div className="password-container">
      <div className="password-card">
        <h1>Password Reset</h1>
        <form onSubmit={handlePasswordReset}>
          <label>
            <h5>New Password:</h5>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </label>
          <button type="submit">Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default PasswordResetPage;
