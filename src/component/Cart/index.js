import React from 'react'
import { CartContainer,CartButton } from './CartElement'

const Cart = () => {
    return (
        <CartContainer>
            <h1>Pizza of the Day</h1>
            <p>Trufffle alfredo sauce topped with 24 carat gold dust.</p>
            <CartButton>Order Now</CartButton>
        </CartContainer>
    )
}

export default Cart
