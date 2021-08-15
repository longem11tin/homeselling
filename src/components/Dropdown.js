import React from 'react';
import styled from 'styled-components';
import { menuData } from '../data/menuData';
import Button from './Button';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';


const DropdownMain = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color:#C0C0C0;
    display: grid;
    align-items: center;
    opacity: ${({isOpen}) => (isOpen ? 1 : 0)};
    z-index: 999;
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
    left: 0;
    transition: 0.3s ease-in-out;

`

const Icon = styled.div`
    display: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;
const CloseIcon = styled(FaTimes)`
    color: #000d1a;
`;
const DropdownWrapper = styled.div`

`;
const DropdownMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    margin-bottom: 4rem;

    @media (min-width: 680px) {
        grid-template-rows: repeat(4, 60px);
    }
`;
const DropdownLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    text-decoration: none;
    list-style: none;
    color: #000;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
        color: #000d1a;
    }
`;  
const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

const Dropdown = ({isOpen, toggle}) => {

    // console.log(isOpen);
    return (
        <DropdownMain isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    {menuData.map(( item , index ) => (
                        <DropdownLink to={item.link} key={index}>
                            {item.title}
                        </DropdownLink>
                    ))}
                </DropdownMenu>
            </DropdownWrapper>
            <BtnWrap>
                <Button primary='true' big='true' round='true' to='/contact'>
                    Contact us 
                </Button>
            </BtnWrap>
        </DropdownMain>
    )
}

export default Dropdown;
