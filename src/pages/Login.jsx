import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEye, FaEyeSlash, FaArrowLeft } from 'react-icons/fa'; // Import eye and back arrow icons
import { signInWithGoogle } from '../firebase/firebaseConfig'; // Import the Google sign-in method
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for routing

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility
  const navigate = useNavigate(); // Hook for navigation

  // Handle Google login
  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      console.log('Google login successful');
      // Redirect to the home page or dashboard
    } catch (err) {
      setError(err.message);
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Handle back button click to navigate to the landing page
  const handleBack = () => {
    navigate('/'); // Redirects to the landing page
  };

  return (
    <LoginPageContainer>
      <LoginFormContainer>
        <BackButton onClick={handleBack}>
          <FaArrowLeft /> Back
        </BackButton>
        <h2>Welcome Back!</h2>
        <form>
          <Input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <PasswordInputContainer>
            <PasswordInput
              type={passwordVisible ? 'text' : 'password'} // Toggle input type based on state
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <EyeIcon onClick={togglePasswordVisibility}>
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </EyeIcon>
          </PasswordInputContainer>
          <LoginButton type="submit">Log In</LoginButton>
        </form>

        {/* Google Login Button */}
        <GoogleButton onClick={handleGoogleLogin}>Log in with Google</GoogleButton>

        {error && <ErrorText>{error}</ErrorText>}
      </LoginFormContainer>
    </LoginPageContainer>
  );
};

// Styled Components

const LoginPageContainer = styled.div`
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #fff;
`;

const LoginFormContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  padding: 3rem 2rem;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

const BackButton = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  color: #fff;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;

  &:hover {
    color: #00df9a;
  }

  svg {
    margin-right: 8px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin: 0.5rem 0;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #444;
  }

  &:focus {
    outline: none;
    background-color: #555;
    box-shadow: 0 0 8px rgba(0, 255, 0, 0.5);
  }
`;

const PasswordInputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const PasswordInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin: 0.5rem 0;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #444;
  }

  &:focus {
    outline: none;
    background-color: #555;
    box-shadow: 0 0 8px rgba(0, 255, 0, 0.5);
  }
`;

const EyeIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 54.5%;
  transform: translateY(-50%);
  color: #aaa;
  cursor: pointer;

  &:hover {
    color: #fff;
  }

  &:active {
    transform: scale(1);
    top: 38%;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  background-color: #00df9a;
  border: none;
  border-radius: 5px;
  color: #000;
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #00c776;
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 255, 0, 0.3);
  }

  &:active {
    transform: translateY(0px);
    box-shadow: 0 2px 6px rgba(0, 255, 0, 0.3);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 8px #00df9a;
  }
`;

const GoogleButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  background-color: #db4437;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #c1351d;
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(255, 87, 34, 0.3);
  }

  &:active {
    transform: translateY(0px);
    box-shadow: 0 2px 6px rgba(255, 87, 34, 0.3);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 8px #db4437;
  }
`;

const ErrorText = styled.p`
  color: red;
`;

export default Login;
