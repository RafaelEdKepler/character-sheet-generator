import styled, { keyframes } from "styled-components";

import px2vw from "../../utils/px2vw";

export const TransitionAnimation = keyframes`
    40% {
        transform: translateX(100vw);
        opacity: 1;
    }
    41% {
        transform: translateX(-100vw);
    }
    100% {
        opcaity: 0;
        transform: translateX(0);
    }
`;

export const Container = styled.div`
    width: ${px2vw(513)};
    height: ${px2vw(404)};
    background: var(--grey);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: ${px2vw(10)};
    border-style: solid;
    border-width: ${px2vw(1)};
    animation-name: ${props => props.animation ? TransitionAnimation : ''};
    animation-duration: 1s;
    animation-iteration-count: 1;
`;

export const ListContainer = styled.div`
    width: ${px2vw(445)};
    height: ${px2vw(149)};
    margin: ${px2vw(10)};
    background: #FFF;
    display: flex;
    flex-direction: column;
    border-style: solid;
    padding: ${px2vw(5)};
    border-radius: 5px;
    overflow-x: hidden;
`;

export const RowContainer = styled.div`
    width: ${px2vw(400)};
    height: ${px2vw(25)};
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

export const Title = styled.span`
    font-size: 1.5rem;
    margin: 10px 0 20px 0;
    filter: drop-shadow(1px 1px 1px #000);
`;

export const RowText = styled.span`
    width: ${px2vw(342)};
    overflow: hidden;
`
export const Img = styled.img`
    width: ${px2vw(20)};
    height: ${px2vw(20)};
    margin: ${px2vw(3)} 0 0 0;

    &:hover {
        cursor: pointer;
    }
`;

export const Check = styled.input`
    width: ${px2vw(20)};
    height: ${px2vw(20)};
    border-radius: ${px2vw(5)};
`

export const HelperContainer = styled(ListContainer)`
    height: ${px2vw(109)};
`;

export const HelperIconContainer = styled.div`
    display: flex;
    justify-content: left;
    width: 100%;
`;

export const TextHelper = styled.textarea`
    width: ${px2vw(430)};
    height: ${px2vw(90)};
    resize: none;
    border-style: none;

    &:focus {
        outline: 0;
    }
`

export const InitialPageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const BigButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
`;

export const BigButton = styled.button`
    width: ${px2vw(430)};
    height: ${px2vw(50)};
    margin: 0 0 ${px2vw(35)} 0;
    border-radius: ${px2vw(5)};
    background: #DB0090;
    color: #FFF;
    border-style: none;

    &:hover {
        border-style: groove;
        border-color: #000;
        -webkit-border-stroke: 1px black;
    }
`;

export const SubTitle = styled.span`

`;

export const ButtonText = styled.span`
    font-size: 1.5rem;
    -webkit-text-stroke: 1px white;
`;

export const OptionsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const QuestionContainer = styled.div`
    display: flex;
    flex-diretcion: row;
`;

export const NextContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NextButton = styled.button`
    outline: 0;
    border-style: none;
    width: ${px2vw(30)};
    height: ${px2vw(30)};
    background-color: rgba(0,0,0,0);
    transition: border-color 3s ease;
    border-radius: ${px2vw(5)};
    border-color: rgba(0,0,0,0);

    &:hover {
        border-color: rgba(0,0,0,1);
        border-style: solid;
    }
`;