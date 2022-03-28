import React from 'react';
import styled from 'styled-components';
import {auth, provider} from '../firebase/firebase';
import companyLoginLogo from '../assets/AmazonLoginLogo.png';

export const Login = ({setUser}) => {
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            /** @type {firebase.auth.OAuthCredential} */
            let credential = result.credential;
            // console.log('credential');
            // console.log(credential);
            // The signed-in user info.
            // let user = result.user;
            // console.log('user');
            // console.log(user);
            // This gives you a Google Access Token. You can use it to access the Google API.
            let token = credential.accessToken;
            let user = {
                name: result.user.displayName,
                email: result.user.email,
                photo: result.user.photoURL,
            };
            setUser(user);
            localStorage.setItem('user', JSON.stringify(user));
        })
        .catch(error => {
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(errorMessage);
            // The email of the user's account used.
            let email = error.email;
            console.log(email);
            // The firebase.auth.AuthCredential type that was used.
            let errorCredential = error.credential;
            console.log(errorCredential);
        });
    };
    return (
        <Container>
            <Content>
                <AmazonLogo src={companyLoginLogo}></AmazonLogo>
                <h1>Sign into Amazon</h1>
                <LoginButton onClick={signIn}>
                    Sign in with Google
                </LoginButton>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f8f8f8;
    display: grid;
    place-items: center;
`
const Content = styled.div`
    padding: 100px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 1px 3px gray;
    text-align: center;
`
const AmazonLogo = styled.img`
    height: 100px;
    margin-bottom: 40px;
`
const LoginButton = styled.button`
    margin-top: 50px;
    background-color: #f0c14b;
    height: 40px;
    border: 2px solid #a88734;
    border-radius: 4px;
    padding: 4px 8px;
    cursor: pointer;
`