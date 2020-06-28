import React, { useState } from 'react';
import { Link } from '@reach/router';
import { css, keyframes } from '@emotion/core';
import colors from './colors';

const Navbar = () => {
    const spin = keyframes`
        to {
            transform: rotate(360deg);2
        }
    `;
    const [padding, setPadding] = useState(15)
    return (
        <header onClick={() => setPadding(padding + 15)}
            css={css`
                    background-color: ${colors.dark};
                    padding: ${padding}px;
                `}
        >
            <Link to='/'>Adopt-me</Link>
            <span role='img' aria-label='logo'
                css={css`
                    font-size: 60px;
                    &:hover{
                        text-decoration: underline;
                        cursor: pointer;
                        animation: 1s ${spin} linear infinite;
                    }
                `}
            >🕊️</span>
        </header>
    )
}

export default Navbar;

