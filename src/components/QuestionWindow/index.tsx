import React, { useContext, useState } from "react";

import {
    Container, ListContainer, RowContainer, Title, RowText, Img,
    Check, HelperContainer, TextHelper, HelperIconContainer,
    InitialPageContainer, BigButton, SubTitle, ButtonText,
    BigButtonContainer
} from "./style";

import axios from "axios";
import { MainContext } from "../../context/mainContext";

const QuestionWindow = () => {
    const { title, page } = useContext(MainContext);

    const [textHelper, setTextHelper] = useState('Isso aqui é um descritivo para verificar se o texto de ajuda está aparecendo corretamenteenteentennteentennteentennteentennteentennteentennteentennteentennteentennteentennteentennteenten');

    const [desc, setDesc] = useState({
        'Humano': 'Humanos são a raça mais populosa de Arton, não possuem nenhuma característica diferente dos humanos que você conhece.',
        'Elfo': 'Elfos são criaturas altas e esguias, possuem algumas habilidade a mais, podendo enxergar melhor durante a noite, porém não costumam ser muito resistentes.',
        'Anão': 'Anões são criaturas baixas e parrudas, possuem uma visão melhorada para se adaptar a vida nas minas, não costumam ser muito ágeis ou sorrateiros'
    })
    const [raca, setRaca] = useState([{
        'value': 'Humano',
    }, {
        'value': 'Elfo',
    }, {
        'value': 'Anão'
    }
    ]);

    const handleClick = (id) => {
        setTextHelper(desc[id]);
    }

    return (
        <Container>
            <Title>{title}</Title>
            {
                page === "inicial" && (
                    <InitialPageContainer>
                        <SubTitle>Você gostaria de criar uma ficha nova ou carregar uma existente?</SubTitle>
                        <BigButtonContainer>
                            <BigButton><ButtonText><b>Começar uma nova!</b></ButtonText></BigButton>
                            <BigButton><ButtonText><b>Carregar uma existente!</b></ButtonText></BigButton>
                        </BigButtonContainer>
                    </InitialPageContainer>
                )
            }
            {page === "outracoisa" && (
                <>
                    <ListContainer>
                        {raca.map((index) =>
                            <RowContainer>
                                <RowText>{index.value}</RowText>
                                <Img
                                    onClick={() => handleClick(index.value)}
                                    id={index.value}
                                    src="./help_icon.svg"
                                />
                                <Check id={index.value} type="checkbox" />
                            </RowContainer>
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
                        <TextHelper readonly value={textHelper} />
                    </HelperContainer>
                </>
            )}
        </Container>
    );
}

export default QuestionWindow;