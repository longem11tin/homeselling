import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled(Link)`

    background: ${({primary}) => (!primary ? "#000" : "#CD853F")};
    color: ${({primary}) => (!primary ? "#000" : "#000d1a")};

    white-space: nowrap;
    outline: none;
    border: none;
    min-width: 100px;
    max-width: 200px;
    cursor: pointer;
    transition: 0.3s;
    display: flex;
    text-decoration: none;
    justify-content: center;
    align-items: center;

    padding: ${({big}) => (big ? "20px 40px": "14px 24px")};
    font-size: ${({big}) => (big ? "20px": "14px")};

    &:hover {
        transform: translateY(-2px);
    }
`

export default Button;