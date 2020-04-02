import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.header`
  @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
  padding: 10px 10px;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
`;

export const Cart = styled(Link)`
  text-decoration: none;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 50px 0 0;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
  span {
    font-size: 12px;
  }
`;

export const Logo = styled(Link)`
  text-decoration: none;
  font-size: 30px;
  font-family: 'Great Vibes';
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1,
  p {
    margin: 5px 0 5px 50px;
  }

  p {
    font-size: 12px;
    font-family: sans-serif;
  }
`;
