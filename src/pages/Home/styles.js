import styled from 'styled-components';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  width: 1000px;
  margin: 20px auto;

  text-align: center;

  li {
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    width: 250px;
    max-height: 400px;

    background-color: #f9f9f9;
    padding: 20px 25px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

    img {
      width: 100%;
      margin-bottom: 10px;
    }

    #price {
      font-size: 20px;
      align-self: end;
      font-weight: bold;
    }
  }

  strong {
    text-transform: uppercase;
    font-size: 12px;
  }

  button {
    display: flex;
    align-items: center;
    color: white;
    font-weight: bold;
    background: linear-gradient(to left, #588be5, #38cddd);
    /* padding: 8px 8px; */
    border: none;
    border-radius: 6px;
    margin-top: 15px;
    transition: all 0.1s;

    span {
      font-size: 12px;
      margin: 0 auto;
    }

    div {
      background: rgba(0, 0, 0, 0.2);
      border-radius: 6px;
      padding: 8px 8px;
      display: flex;
      align-items: center;
    }
  }
  button:hover {
    box-shadow: 0px 0px 5px 1px #38cddd;
  }
`;
