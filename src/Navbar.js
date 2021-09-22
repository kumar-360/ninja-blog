import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const NavbarData = styled.div`

`;

const Navbar = () => {
    return (
        <Wrapper>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <NavbarData>My Blog</NavbarData>
            </Link>
            <Link to='/blogs/add-blog' style={{ textDecoration: 'none' }}>
                <NavbarData>Add Blog</NavbarData>
            </Link>
        </Wrapper>
    );
};

export default Navbar;