import React from 'react';

import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://w4.ezcdn.com.br/gcmgames/fotos/pequena/102347fp1/pubg-mobile-unknown-cash-600-90-uc.jpg"
          alt="product"
        />
        <strong>pubg mobile</strong>
        <span>R$ 15,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={20} color="#fff" /> 3
          </div>

          <span>ADD TO CART</span>
        </button>
      </li>
      <li>
        <img
          src="https://w4.ezcdn.com.br/gcmgames/fotos/pequena/102347fp1/pubg-mobile-unknown-cash-600-90-uc.jpg"
          alt="product"
        />
        <strong>pubg mobile</strong>
        <span>R$ 15,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={20} color="#fff" /> 3
          </div>

          <span>ADD TO CART</span>
        </button>
      </li>
      <li>
        <img
          src="https://w4.ezcdn.com.br/gcmgames/fotos/pequena/102347fp1/pubg-mobile-unknown-cash-600-90-uc.jpg"
          alt="product"
        />
        <strong>pubg mobile</strong>
        <span>R$ 15,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={20} color="#fff" /> 3
          </div>

          <span>ADD TO CART</span>
        </button>
      </li>
    </ProductList>
  );
}
