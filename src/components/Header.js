import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import companyLogo from '../assets/AmazonLogo.png';
import { Link } from 'react-router-dom';

export const Header = ({user, signOut, cartItemsCount}) => {
    const getFirstName = () => {
        return user.name ? user.name.split(' ')[0] : 'User';
    };
    return (
        <HeaderBar>
            <HeaderLogo>
                <Link to="/">
                    <img src={companyLogo} alt="logo" />
                </Link>
            </HeaderLogo>
            <HeaderOptionAddress>
                <LocationOnIcon />
                <HeaderOption>
                    <OptionLineOne>Hello,</OptionLineOne>
                    <OptionLineTwo>Select your address</OptionLineTwo>
                </HeaderOption>
            </HeaderOptionAddress>
            <HeaderSearch>
                <HeaderSearchInput type="text" />
                <HeaderSearchIconContainer>
                    <SearchIcon />
                </HeaderSearchIconContainer>
            </HeaderSearch>
            <HeaderNavItems>
                <HeaderOption onClick={signOut}>
                    <OptionLineOne>Hello, {getFirstName()}</OptionLineOne>
                    <OptionLineTwo>Account & Lists</OptionLineTwo>
                </HeaderOption>
                <HeaderOption>
                    <OptionLineOne>Returns</OptionLineOne>
                    <OptionLineTwo>& Orders</OptionLineTwo>
                </HeaderOption>
                <HeaderOptionCart>
                    <Link to="/cart">
                        <ShoppingCartIcon />
                        <ShoppingCartCount>{cartItemsCount()}</ShoppingCartCount>
                    </Link>
                </HeaderOptionCart>
            </HeaderNavItems>
        </HeaderBar>
    )
}

const HeaderBar = styled.div`
    height: 60px;
    background-color: #0f1111;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
`

const HeaderLogo = styled.div`
    img {
        width: 100px;
        margin-left: 11px;
        display: flex;
    } 
`

const HeaderOptionAddress = styled.div`
    padding-left: 9px;
    display: flex;
    align-items: center;
`

const OptionLineOne = styled.div``

const OptionLineTwo = styled.div`
    font-weight: 700;
`

const HeaderSearch = styled.div`
    display: flex;
    flex-grow: 1;
    height: 40px;
    border-radius: 4px;
    overflow: hidden;
    margin-left: 4px;
    background-color: #fff;
    :focus-within {
        box-shadow: 0 0 0 3px #f90;
    }
`

const HeaderSearchInput = styled.input`
    flex-grow: 1;
    border: 0;
    :focus {
        outline: none;
    }
`

const HeaderSearchIconContainer = styled.div`
    background-color: #febd69;
    width: 45px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`

const HeaderNavItems = styled.div`
    display: flex;
`

const HeaderOption = styled.div`
    padding: 10px 9px;
    cursor: pointer;
`

const HeaderOptionCart = styled.div`
    display: flex;
    a {
        display: flex;
        align-items: center;
        padding-right: 9px;
        text-decoration: none;
        color: #fff;
    }
`

const ShoppingCartCount = styled.div`
    padding-left: 4px;
    font-weight: 900;
    color: #f0c14b;
`