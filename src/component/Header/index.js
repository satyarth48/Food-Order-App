import React, {useState} from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { HeaderContainer,HeaderContent,HeaderItem,
    HeaderH1,HeaderP,HeaderBtn } from './HeaderElements';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <HeaderContainer>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeaderContent>
                <HeaderItem>
                    <HeaderH1> Greatest Pizza Ever</HeaderH1>
                    <HeaderP>Ready in 60 seconds</HeaderP>
                    <HeaderBtn>Place Order</HeaderBtn>
                </HeaderItem>
            </HeaderContent>
        </HeaderContainer>
    )
}

export default Header ;
