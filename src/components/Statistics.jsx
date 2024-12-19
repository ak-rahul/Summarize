import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebaseConfig";
import { FaUser, FaEnvelope, FaCalendarAlt } from 'react-icons/fa';

const Statistics = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setUserData(docSnap.data());
          } else {
            setError('No user data found.');
          }
        } else {
          setError('No user logged in.');
        }
      } catch (err) {
        setError('Error fetching user data.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <LoadingText>Loading user statistics...</LoadingText>;
  }

  if (error) {
    return <ErrorText>{error}</ErrorText>;
  }

  return (
    <StatisticsContainer>
      <Title>User Statistics</Title>
      <StatsCard>
        <Icon>
          <FaUser />
        </Icon>
        <Stat>
          <Label>Full Name</Label>
          <Value>{userData?.name}</Value>
        </Stat>
      </StatsCard>
      <StatsCard>
        <Icon>
          <FaEnvelope />
        </Icon>
        <Stat>
          <Label>Email Address</Label>
          <Value>{userData?.email}</Value>
        </Stat>
      </StatsCard>
      <StatsCard>
        <Icon>
          <FaCalendarAlt />
        </Icon>
        <Stat>
          <Label>Account Created</Label>
          <Value>{new Date(userData?.createdAt).toLocaleDateString()}</Value>
        </Stat>
      </StatsCard>
    </StatisticsContainer>
  );
};

// Styled Components
const StatisticsContainer = styled.div`
  background-color: #000;
  padding: 2rem;
  color: #fff;
  width: 84%;
  box-shadow: 0 4px 10px rgba(0, 223, 154, 0.5);
  border: 2px solid #00df9a;
  max-height: 93%;  /* Set the maximum height */
  overflow-y: auto;  /* Allow vertical scrolling */
`;

const Title = styled.h2`
  text-align: center;
  color: #00df9a;
  margin-bottom: 2rem;
`;

const StatsCard = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
  padding: 1rem 1.5rem;
  border-radius: 8px;
  margin: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 223, 154, 0.3);
`;

const Icon = styled.div`
  font-size: 2rem;
  color: #00df9a;
  margin-right: 1rem;
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.span`
  font-size: 0.9rem;
  color: #aaa;
`;

const Value = styled.span`
  font-size: 1.2rem;
  color: #fff;
  font-weight: bold;
`;

const LoadingText = styled.p`
  text-align: center;
  color: #aaa;
`;

const ErrorText = styled.p`
  text-align: center;
  color: red;
`;

export default Statistics;
