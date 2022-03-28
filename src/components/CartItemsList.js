import React from 'react';
import styled from 'styled-components';
import { CartItem } from './CartItem';

export const CartItemsList = ({cartItemsList}) => {
    return (
        <Container>
            <Title>Shopping Cart</Title>
            <hr />
            <ItemsContainer>
                {cartItemsList.length > 0 
                    ? cartItemsList.map(item => <CartItem key={item.id} item={item.product} id={item.id} />)
                    : <EmptyCartWarning>
                            Cart is Empty
                      </EmptyCartWarning>
                }
            </ItemsContainer>
        </Container>
    )
}

const Container = styled.div`
    flex: 0.8;
    margin-right: 18px;
    padding: 20px;
    background-color: white;
`
const Title = styled.h1`
    margin-bottom: 8px;
`
const ItemsContainer = styled.div``
const EmptyCartWarning = styled.div`
    text-align: center;
    line-height: 200px;
`
