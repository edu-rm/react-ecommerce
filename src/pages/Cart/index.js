/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QUANTIDADE</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://w4.ezcdn.com.br/gcmgames/fotos/pequena/102347fp1/pubg-mobile-unknown-cash-600-90-uc.jpg"
                alt="product"
              />
            </td>
            <td>
              <strong>PUB G</strong>
              <span>R$ 15</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#588be5" />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#588be5" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$23423</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#588be5" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finalizar Pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$1440,00</strong>
        </Total>
      </footer>
    </Container>
  );
}
