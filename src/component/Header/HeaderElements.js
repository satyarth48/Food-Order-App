import styled from "styled-components";

export const HeaderContainer = styled.div`
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
                 url('./image/pizza 1a.jpg') ;
    height: 100vh;
    background-position: center;
    background-size: cover;    
`;

export const HeaderContent = styled.div`
    height: calc(100vh -80px);
    max-height: 100%;
    width: 100vw;
    padding: 1rem calc((100vw - 1300px) /2);
`;

export const HeaderItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 130vh;
    max-height: 100%;
    padding: 0 2rem;
    width: 550px;
    color: #fff;
    text-transform: uppercase;
    line-height: 1;
    font-weight: bold;

    @media screen and (max-width: 650px) {
        width: 100%;
    }
`;

export const HeaderH1 = styled.h1`
    font-size: clamp(2.5rem, 10vw);
    margin-bottom: 1rem;
    box-shadow: 3px 3px 20px #e9ba23;
    letter-spacing: 3px;
`;
export const HeaderP = styled.p`
    font-size: clamp(2rem, 2.5vw, 3rem);
    margin-bottom: 2rem;
    
`;
export const HeaderBtn = styled.button`
    font-size: 1.4rem;
    padding: 1rem 4rem;
    border: nene;
    background: #e31837;
    color: #fff;
    transition: 0.2s ease-out;

    &:hover {
        background: #ffc500;
        transition: 0.2s ease-out;
        color: #000;
    }
`;