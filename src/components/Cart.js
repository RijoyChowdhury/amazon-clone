import React from 'react';
import styled from 'styled-components';
import {CartTotal} from './CartTotal';
import {CartItemsList} from './CartItemsList';

function Cart({cartItems, cartItemsCount}) {
    const getTotalPrice = () => {
        let totalPrice = 0;
        cartItems.forEach(item => {
            totalPrice += item.product.quantity * item.product.price;
        });
        return totalPrice;
    };
    return (
        <Container>
            <CartItemsList cartItemsList={cartItems} />
            <CartTotal cartTotalPrice={getTotalPrice} totalCount={cartItemsCount} />
        </Container>
    )
}

export default Cart

const Container = styled.div`
    display: flex;
    padding: 14px 18px 0 18px;
    align-items: flex-start;
    max-width: 80%;
    margin: 0 auto;
`