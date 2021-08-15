import React from 'react';
import styled , { css } from 'styled-components';
import { Link } from 'react-router-dom';
import Button from './Button';
import { menuData } from '../data/menuData';

const Nav = styled.nav`
    height: 40px;
    width: 100%;
    z-index: 100;
    position: fixed;
    padding: 1rem 2rem;
    justify-content: space-between;
    text-decoration: none;
    display: flex;
`

const VarNav = css `
    color: #fff;
    display: flex;
    padding: 0 1rem;
    cursor: pointer;
    align-items: center;
    height: 100%;
    justify-content: center;

`

const Logo = styled(Link)`
    ${VarNav};
    font-style: italic;
    font-family: 'Montserrat', sans-serif;
`

const urlFaBars = "https://codersguidebook.com/how-to-build-a-website/images/fa-bars.png";

const MenuLines = styled.i`
    display: none;

    @media (max-width:  680px) {

        display: block;
        background-image: url(${urlFaBars});
        background-size: contain;
        height: 40px;
        width: 40px;
        cursor: pointer;
        top: 60px;
        right: 60px;
        transform: translate(-100%, -2%);
    }
`

const NavMenu = styled.div`
    /* ${VarNav}; */
    display: flex;
    align-items: center;
    justify-content: center;    
    margin-top: 0;
    @media (max-width: 680px) {
        display: none;
    }
`;

const NavMenuLink = styled(Link)`
    ${VarNav}
`;
const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-top: 0px;

    @media (max-width: 680px) {
        display: none;
    }
`;

const NavBar = ({ toggle }) => {
    return (
        <Nav> 
            <Logo to="">Long Em</Logo>
            <MenuLines onClick={toggle}/>
            <NavMenu>
                {menuData.map(( slide , index ) => (
                    <NavMenuLink to = { slide.link } key={ index }>
                        { slide.title }
                    </NavMenuLink>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to='/contact' primary='true'>
                    Contact me
                </Button>
            </NavBtn>
        </Nav>
    )
}

export default NavBar;
