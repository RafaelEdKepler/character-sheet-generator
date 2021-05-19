import styled from "styled-components";

import px2vw from "../../utils/px2vw";

export const Container = styled.div`
    width: ${px2vw(513)};
    height: ${px2vw(404)};
    background: var(--grey);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: ${px2vw(10)};
    border-style: solid;
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