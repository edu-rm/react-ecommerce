import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 6px;
  max-width: 1000px;
  margin: 0 auto;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      color: white;
      font-weight: bold;
      background: linear-gradient(to left, #588be5, #38cddd);
      padding: 10px 10px;
      border: none;
      border-radius: 6px;
      margin-top: 15px;
      transition: all 0.1s;
    }
    button:hover {
      box-shadow: 0px 0px 5px 1px #38cddd;
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: rgba(0, 0, 0, 0.8);
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    vertical-align: middle;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }

  strong {
    display: block;
    color: #333;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 6px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
    button {
      background: none;
      border: 0;
      padding: 6px;
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
  }
`;
