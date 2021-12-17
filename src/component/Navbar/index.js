import React from 'react';
import {Bars, Nav,NavIcon,Navlink} from "./Navbar";

const Navbar = ({toggle}) => {
    return (
        <Nav>
            <Navlink to="/"> Pizza Wala </Navlink>
            <NavIcon onClick={toggle}>
                <p>Menu</p>
                <Bars />
            </NavIcon>

        </Nav>
    )
}

export default Navbar;
