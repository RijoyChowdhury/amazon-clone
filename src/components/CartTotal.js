import React from 'react';
import styled from 'styled-components';
import NumberFormat from 'react-number-format';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

export const CartTotal = ({cartTotalPrice, totalCount}) => {
    return (
        <Container>
            <SubTotal>
                <SubTotalLeft>Subtotal ({totalCount()} items):</SubTotalLeft>
                <SubTotalRight>
                    <NumberFormat value={cartTotalPrice()} displayType={'text'} thousandSeparator={true} thousandsGroupStyle="lakh" prefix={'₹'} />
                </SubTotalRight>
            </SubTotal>
            <CheckoutButton>
                <ShoppingBagIcon />
                <ButtonText>Proceed to Checkout</ButtonText>
            </CheckoutButton>
        </Container>
    )
}

const Container = styled.div`
    flex: 0.3;
    padding: 20px;
    background-color: white;
`
const SubTotal = styled.h2`
    margin-bottom: 16px;
    display: flex;
`
const SubTotalLeft = styled.div`
    flex-grow: 1;
`
const SubTotalRight = styled.div`
    color: #a88734;
`
const CheckoutButton = styled.button`
    background-color: #f0c14b;
    width: 100%;
    padding: 4px 8px;
    border: 2px solid #a88734;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    font-height: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 40px;
    :hover {
        background-color: #ddb347;
    }
`
const ButtonText = styled.span``