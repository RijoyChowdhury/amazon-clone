import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Product } from './Product';
import db from '../firebase/firebase';
// import banner from '../assets/banner.jpg';

export const Home = () => {
    const [products, setProducts] = useState([]);
    const getProducts = async () => {
        db.collection('products').onSnapshot((snapshot) => {
            const tempProducts = snapshot.docs.map((doc) => ({
                id: doc.id,
                product: doc.data()
            }));
            setProducts(tempProducts);
        });
    };
    useEffect(() => {
        getProducts();
    }, []);
    return (
        <Container>
            <Banner>
            </Banner>
            <Content>
                {products.map((product) => <Product productData={product.product} id={product.id} key={product.id} />)}
            </Content>
        </Container>
    )
}

const Container = styled.div`
    max-width: 80%;
    margin: 0 auto;
`

const Banner = styled.div`
    background-image: url('https://i.imgur.com/SYHeuYM.jpg');
    min-height: 600px;
    background-position: center;
    background-size: cover;
    mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
    z-index: 1;
`

const Content = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    margin-top: -350px;
    display: flex;
`
