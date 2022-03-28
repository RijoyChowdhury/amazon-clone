import React from 'react';
import styled from 'styled-components';
import NumberFormat from 'react-number-format';
import db from '../firebase/firebase';

export const CartItem = ({item, id}) => {
    const {name, price, quantity, imageUrl} = item;
    let options = [];
    for(let i = 1; i <= Math.max(quantity + 1, 10); i++){
        options.push(<option value={i}>{i}</option>);
    }
    const updateCount = (value) => {
        if(value !== quantity) {
            const cartItems = db.collection('cart').doc(id);
            cartItems.get().then(doc => {
                if(doc.exists) {
                    cartItems.update({
                        quantity: parseInt(value),
                    });
                }
            });
        } else {
            return;
        }
    };
    const deleteItem = (event) => {
        event.preventDefault();
        const cartItems = db.collection('cart').doc(id);
        cartItems.delete();
    };
    return (
        <Container>
            <ImageContainer>
                <img src={imageUrl} alt="" />
            </ImageContainer>
            <CartItemInfo>
                <CartItemInfoTop>
                    <h2>{name}</h2>
                </CartItemInfoTop>
                <CartItemInfoBottom>
                    <CartItemQuantityContainer>Qty:
                        <select value={quantity} onChange={event => updateCount(event.target.value)}>
                            {options}
                        </select>
                    </CartItemQuantityContainer>
                    <CartItemDeleteContainer onClick={deleteItem}>Delete</CartItemDeleteContainer>
                </CartItemInfoBottom>
            </CartItemInfo>
            <CartItemPrice>
                <NumberFormat value={price} displayType={'text'} thousandSeparator={true} thousandsGroupStyle="lakh" prefix={'₹'} />
            </CartItemPrice>
        </Container>
    )
}

const Container = styled.div`
    padding-top: 12px;
    padding-bottom: 12px;
    display: flex;
    border-bottom: 1px solid #ddd;
`
const ImageContainer = styled.div`
    width: 180px;
    height: 180px;
    flex-shrink: 0;
    flex-grow: 0;
    margin-right: 16px;
    img {
        object-fit: contain;
        height: 100%;
        width: 100%;
    }
`
const CartItemInfo = styled.div`
    flex-grow: 1;
`
const CartItemInfoTop = styled.div`
    color: #007185;
    h2 {
        font-size: 18px;
    }
`
const CartItemInfoBottom = styled.div`
    display: flex;
    margin-top: 4px;
    align-items: center;
`
const CartItemQuantityContainer = styled.div`
    select {
        margin: 5px;
        padding: 8px;
        font-size: 16px;
        box-shadow: 0 2px 5px rgba(15,17,17,.15);
        :focus {
            outline: none;
        }
    }
`
const CartItemDeleteContainer = styled.div`
    color: #007185;
    margin-left: 16px;
    cursor: pointer;
`
const CartItemPrice = styled.div`
    font-size: 18px;
    font-weight: 700;
    margin-left: 16px;
`