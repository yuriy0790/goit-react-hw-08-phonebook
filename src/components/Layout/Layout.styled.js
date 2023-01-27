import styled from 'styled-components';

export const Header = styled.header`
  position: sticky;
  z-index: 9999;
  top: 0;
  left: 0;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(90deg, #8652ee, #e73c7e, #e981ed, #9123d5);
  background-size: 400% 400%;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 5px;
  padding: 5px;
  list-style: none;
  align-items: center;
`;

export const NavListItem = styled.li`
  color: white;
  background-color: white;
  padding: 5px;
  border: 1px solid white;
  border-radius: 6px;
  min-width: 80px;
  text-align: center;

  &:hover {
    background-color: #e73c7e;
  }
`;
