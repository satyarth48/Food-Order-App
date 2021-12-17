import styled from "styled-components";
import { NavLink as Link} from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa";

export const Nav = styled.nav`
    background: transparent;
    height: 100px;
    display: flex;
    justify-content: center;
    font-weight: 700;
`;

export const Navlink = styled(Link)`
    color: #fff;
    // font-size: 4rem;
    font-size: clamp(5rem, 5vw, 4rem);
    display: flex;
    align-items: center;
    text-decoration: none;
    curser: pointer;
    margin-top:5px;
    box-shadow: 5px 3px 5px 10px #e9ba23;

    @media screen and (max-width: 400px){
        position: absolute;
        display: center;
        top: 10px;
        
    }
`;

export const NavIcon = styled.div`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    curser: pointer;
    color: #fff;

    p{
        transform: translate(-165%, 100%);
        font-weight: bold;
    }

    @media screen and (max-width: 800px){
        position: absolute;
        transform: translate(-5%, 100%);
        margin-top: 70px;
        font-size: 30px;
    }

`;

export const Bars = styled(FaPizzaSlice)`
    font-size: 2rem;
    transform: translate(-40%, -10%);

    @media screen and (max-width: 700px){
        position: absolute;
        display: none;
        left: 25px;
    }
`;
