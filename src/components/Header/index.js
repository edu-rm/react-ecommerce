import React from 'react';
import { Link } from 'react-router-dom';

import { MdShoppingCart } from 'react-icons/md';

import { Container, Cart, Logo } from './styles';

export default function Header() {
  return (
    <Container>
      <Logo to="/">
        <h1>My.</h1>
        <p>ECOMMERCE</p>
      </Logo>
      <Cart to="/cart">
        <MdShoppingCart size={32} color="black" />
        <strong>Meu carrinho</strong>
        <span>32 itens</span>
      </Cart>
    </Container>
  );
}
