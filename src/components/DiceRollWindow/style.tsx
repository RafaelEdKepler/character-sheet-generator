import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: ${px2vw(400)};
    justify-content: space-evenly;

    &:first-child {
        margin-top: ${px2vw(20)};
    }
`;

export const QuantityContainer = styled.div`
    width: 100%;
    align-items: left;
    margin-bottom: ${px2vw(20)};
`;

export const Input = styled.select`
    width: ${px2vw(300)};
    border-radius: ${px2vw(5)};
`;

export const Titulo = styled.span`
    margin-right: ${px2vw(10)};
`;

export const DiceContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-right: ${px2vw(20)};
`;

export const Dice = styled.button`
    background: var(--dice-color);
    width: ${px2vw(70)};
    height: ${px2vw(60)};
    border-style: solid;
    border-radius: ${px2vw(5)};
    border-color: black;

    &:hover {
        border-color: white;
    }
`;

export const Img = styled.img`
    height: ${px2vw(45)};
    width: ${px2vw(55)};
`;