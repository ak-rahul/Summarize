import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEye, FaEyeSlash, FaArrowLeft } from 'react-icons/fa'; // Import icons
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for routing
import { createUserWithEmailAndPassword } from "firebase/auth"; // Firebase auth method
import { auth } from "../firebase/firebaseConfig"; // Import Firebase auth instance
import { FaSpinner } from 'react-icons/fa'; // Import spinner icon

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false); // State to track loading
  const navigate = useNavigate(); // Hook for navigation

  // Handle back button click to navigate to the login page
  const handleBack = () => {
    navigate('/login');
  };

  // Handle sign-up form submission
  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true); // Set loading to true when form is submitted

    try {
      // Create a new user with email and password in Firebase
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('User created successfully');
      navigate('/dashboard'); // Redirect to dashboard after successful sign-up
    } catch (err) {
      setError(err.message); // Display error message
      console.error('Error creating user:', err);
    } finally {
      setLoading(false); // Set loading to false after completion
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <SignUpPageContainer>
      <SignUpFormContainer>
        <BackButton onClick={handleBack}>
          <FaArrowLeft /> Back
        </BackButton>
        <h2>Create an Account</h2>
        <form onSubmit={handleSignUpSubmit}>
          <Input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <PasswordInputContainer>
            <PasswordInput
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <EyeIcon onClick={togglePasswordVisibility}>
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </EyeIcon>
          </PasswordInputContainer>
          <PasswordInputContainer>
            <PasswordInput
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <EyeIcon onClick={togglePasswordVisibility}>
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </EyeIcon>
          </PasswordInputContainer>
          <SignUpButton type="submit" disabled={loading}>
            {loading ? <FaSpinner className="spinner" /> : 'Sign Up'}
          </SignUpButton>
        </form>

        {error && <ErrorText>{error}</ErrorText>}

        <LoginLink>
          Already have an account? <span onClick={handleBack}>Log In</span>
        </LoginLink>
      </SignUpFormContainer>
    </SignUpPageContainer>
  );
};

// Styled Components
const SignUpPageContainer = styled.div`
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #fff;
`;

const SignUpFormContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  padding: 3rem 2rem;
  padding-right: 3.4rem;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  text-align: center;
  position: relative;
  box-shadow: 0 0 10px 5px rgba(0, 223, 154, 0.7);

  &:hover {
    box-shadow: 0 0 20px 10px rgba(0, 223, 154, 0.9);
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
    box-shadow: 0 0 8px rgba(0, 223, 154, 0.7);
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
    box-shadow: 0 0 8px rgba(0, 223, 154, 0.7);
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

const SignUpButton = styled.button`
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

  &:disabled {
    background-color: #666;
    cursor: not-allowed;
  }

  .spinner {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const ErrorText = styled.p`
  color: red;
`;

const LoginLink = styled.p`
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

export default SignUp;
