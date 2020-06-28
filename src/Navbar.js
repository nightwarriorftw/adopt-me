import React from 'react';
import { Link } from '@reach/router';
import { css } from '@emotion/core';

const Navbar = () => (
    <header
        css={css`
                    background-color: #333;
                    padding: 15px;
                `}
    >
        <Link to='/'>Adopt-me</Link>
        <span role='img' aria-label='logo'>Logo</span>
    </header>
)


export default Navbar;

