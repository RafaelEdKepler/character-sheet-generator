import React, { useContext, useEffect, useState } from "react";

import {
    Container, ListContainer, RowContainer, Title, RowText, Img,
    Check, HelperContainer, TextHelper, HelperIconContainer,
    InitialPageContainer, BigButton, SubTitle, ButtonText,
    BigButtonContainer
} from "./style";

import axios from "axios";
import { MainContext } from "../../context/mainContext";
import { TableInterface } from "../../utils/interface";

const QuestionWindow = () => {
    const { title, page, setPage, list, subTitle, quantity } = useContext(MainContext);

    const [animation, setAnimation] = useState(null);

    const [textHelper, setTextHelper] = useState('Não sabe o que um dos itens na lista representa? Clique na caixinha de questão da linha em questão e veja!');

    const defineAnimation = () => {
        setAnimation(1);
        if (page === 'inicial') {
            setPage('race');
        }
        setTimeout(function () {
            setAnimation(null);
            clearTimeout();
        }, 1000);
    }

    const handleClick = (description) => {
        setTextHelper(description);
    }

    return (
        <Container animation={animation}>
            <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
            {
                page === "inicial" && (
                    <InitialPageContainer>
                        <BigButtonContainer>
                            <BigButton onClick={() => defineAnimation()}><ButtonText><b>Começar uma nova!</b></ButtonText></BigButton>
                            <BigButton><ButtonText><b>Carregar uma existente!</b></ButtonText></BigButton>
                        </BigButtonContainer>
                    </InitialPageContainer>
                )
            }
            {page !== "inicial" && (
                <>
                    <ListContainer>
                        {list ? (list.map((index, key) =>
                            <RowContainer key={key}>
                                <RowText>{index.name}</RowText>
                                <Img
                                    onClick={() => handleClick(index.description)}
                                    id={index.name}
                                    src="./help_icon.svg"
                                />
                                <Check id={index.name} type="checkbox" />
                            </RowContainer>
                        )) : (
                            <></>
                        )}
                    </ListContainer>
                    <HelperContainer>
                        <RowContainer>
                            <HelperIconContainer>
                                <Img
                                    src="./help_icon.svg"
                                />
                            </HelperIconContainer>
                        </RowContainer>
                        <TextHelper readonly onChange={() => console.log()} value={textHelper} />
                    </HelperContainer>
                </>
            )}
        </Container>
    );
}

export default QuestionWindow;