import React from 'react';
import { useSelector } from 'react-redux';
import { MdShoppingCart } from 'react-icons/md';

import { Container, Cart, Logo } from './styles';

export default function Header() {
  const cartSize = useSelector((state) => state.cart.length);
  return (
    <Container>
      <Logo to="/">
        <h1>My.</h1>
        <p>ECOMMERCE</p>
      </Logo>
      <Cart to="/cart">
        <MdShoppingCart size={32} color="black" />
        <strong>Meu carrinho</strong>
        <span>{cartSize} itens</span>
      </Cart>
    </Container>
  );
}
