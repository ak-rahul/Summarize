import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEye, FaEyeSlash, FaArrowLeft } from 'react-icons/fa'; // Import eye and back arrow icons
import { FcGoogle } from 'react-icons/fc'; // Google icon
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

  // Handle sign up redirection
  const handleSignUp = () => {
    navigate('/signup'); // Redirects to the Sign Up page
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

        {/* OR with horizontal lines */}
        <OrContainer>
          <hr />
          <span>OR</span>
          <hr />
        </OrContainer>

        {/* Google Login Button */}
        <GoogleButton onClick={handleGoogleLogin}>
          <FcGoogle /> Log in with Google
        </GoogleButton>

        {error && <ErrorText>{error}</ErrorText>}

        {/* Sign Up Link */}
        <SignUpLink>
          Don't have an account? <span onClick={handleSignUp}>Sign Up</span>
        </SignUpLink>
      </LoginFormContainer>
    </LoginPageContainer>
  );
};

// Green halo constants
const greenHalo = `0 0 10px 5px rgba(0, 223, 154, 0.7)`;
const greenHaloHover = `0 0 20px 10px rgba(0, 223, 154, 0.9)`;
const greenHaloFocus = `0 0 8px rgba(0, 223, 154, 0.7)`;

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
  padding-right: 3.4rem;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  text-align: center;
  position: relative;
  box-shadow: ${greenHalo};

  &:hover {
    box-shadow: ${greenHaloHover};
  }
`;

const BackButton = styled.div`
  position: fixed;
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

  &:hover {
    background-color: #444;
  }

  &:focus {
    outline: none;
    background-color: #555;
    box-shadow: ${greenHaloFocus};
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

  &:hover {
    background-color: #444;
  }

  &:focus {
    outline: none;
    background-color: #555;
    box-shadow: ${greenHaloFocus};
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
`;

const LoginButton = styled.button`
  width: 106%;
  padding: 0.8rem;
  background-color: #00df9a;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #00c776;
    transform: translateY(-5px);
  }

  &:focus {
    outline: none;
  }
`;

const OrContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
  width: 105%;

  hr {
    flex: 1;
    border: none;
    border-top: 1px solid #fff;
    margin: 0 10px;
    width: 100%;
  }

  span {
    color: #fff;
    font-size: 0.7rem;  /* Smaller font size for OR */
    font-weight: bold;
  }
`;

const GoogleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 106%;  /* Set width to 100% to match the input fields */
  padding: 0.8rem;
  background-color: #fff;
  color: #000;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease;

  svg {
    margin-right: 8px;
    font-size: 1.5rem;
  }

  &:hover {
    background-color: #f1f1f1;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  }
`;

const ErrorText = styled.p`
  color: red;
`;

const SignUpLink = styled.p`
  color: #fff;
  font-size: 0.9rem;
  margin-top: 1rem;
  cursor: pointer;

  span {
    color: #00df9a;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Login;
