import styled from "styled-components";

const Header = (props) => {
    return (
    <Nav>
        <Logo>
            <img src="/assets/images/logo.svg" alt="Disney+"/>
        </Logo>
    </Nav>
    )
}

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #0090b13;
    align-items: center;
    justify-content: space-between;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;
`

const Logo = styled.a`
    padding: 0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;
    img {
        display: block;
        width: 100%;
    }
`

export default Header;