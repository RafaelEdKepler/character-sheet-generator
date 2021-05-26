import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: ${px2vw(400)};

    &:first-child {
        margin-top: ${px2vw(15)};
    }
`;

export const TextInput = styled.span`
    font-size: 0.75rem;
    margin: 0 0 ${px2vw(15)} ${px2vw(5)};
`;

export const TextHability = styled.span`
    margin: ${px2vw(2)};
    width: ${px2vw(130)};
`;

export const InputHability = styled.input`
    margin: 0 ${px2vw(10)} 0 ${px2vw(10)};
    width: ${props => px2vw(props.width)};
    height: ${px2vw(24)};
    border-radius: ${px2vw(5)};
    border-style: solid;
    text-align: center;

`;

export const ButtonReroll = styled.button`
    width: ${px2vw(22)};
    height: ${px2vw(21)};
    border-radius: ${px2vw(5)};
    background: #CCCCCC;
    border-style: solid;
    padding-right: 5px;
    align-items: center;
    display: flex;
    justify-content: center;
`;

export const Img = styled.img`
    width: ${px2vw(13)};
    height: ${px2vw(13)};
`;