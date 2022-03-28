import React from 'react';
import styled from 'styled-components';
import db from '../firebase/firebase';
import NumberFormat from 'react-number-format';

export const Product = ({productData, id}) => {
    const {name, price, rating, imageUrl} = productData;
    const addToCart = () => {
        const cartItems = db.collection('cart').doc(id);
        cartItems.get().then(doc => {
            if(doc.exists){
                cartItems.update({
                    quantity: doc.data().quantity + 1,
                });
            } else {
                cartItems.set({
                    name,
                    price,
                    quantity: 1,
                    imageUrl
                });
            }
        });
    };
    return (
        <Container>
            <Title>
                {name}
            </Title>
            <Price>
                <NumberFormat value={price} displayType={'text'} thousandSeparator={true} thousandsGroupStyle="lakh" prefix={'₹'} />
            </Price>
            <Rating>
                {'⭐'.repeat(rating)}
                <span>{'⭐'.repeat(5 - rating)}</span>
            </Rating>
            <Image src={imageUrl} />
            <ActionSection>
                <AddToCartButton onClick={addToCart}>
                    Add to Cart
                </AddToCartButton>
            </ActionSection>
        </Container>
    )
}

const Container = styled.div`
    background-color: #fff;
    z-index: 100;
    flex: 1;
    padding: 20px;
    margin: 10px;
    max-height: 400px;
    display: flex;
    flex-direction: column;
`
const Title = styled.span``

const Price = styled.span`
    font-weight: 500;
    margin-top: 3px;
`

const Rating = styled.div`
    span {
        opacity: 0.35;
    }
`

const Image = styled.img`
    max-height: 200px;
    object-fit: contain;
`
const ActionSection = styled.div`
    margin-top: 12px;
    display: grid;
    place-items: center;
`

const AddToCartButton = styled.button`
    width: 100px;
    height: 30px;
    background-color: #f0c14b;
    border: 2px solid #a88734;
    border-radius: 2px;
    cursor: pointer;
`