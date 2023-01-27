import styled from 'styled-components';

export const UserMenuWpar = styled.div`
  display: flex;
  gap: 10px;
  padding: 5px;
  align-items: center;
`;

export const UserEmail = styled.p`
  color: white;
  margin: 0;
`;

export const GradientButton = styled.button`
  max-width: 250px;
  text-decoration: none;

  color: white;
  padding: 5px 16px;

  border: 2px solid white;
  border-radius: 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background-image: linear-gradient(
    to right,
    #eda1eb 0%,
    #9030f0 51%,
    #9d3de1 100%
  );
  background-size: 200% auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  transition: 0.5s;

  &:hover {
    background-position: right center;
  }
`;
