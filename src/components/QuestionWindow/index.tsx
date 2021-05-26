import React, { BaseSyntheticEvent, useContext, useEffect, useState } from "react";
import axios from "axios";
import produce from "immer";

import {
    Container, ListContainer, RowContainer, Title, RowText, Img,
    Check, HelperContainer, TextHelper, HelperIconContainer,
    InitialPageContainer, BigButton, SubTitle, ButtonText,
    BigButtonContainer, OptionsContainer, QuestionContainer,
    NextContainer, NextButton, List, FieldContainer, Span, Field, Select,
    BasicStatsContainer, FillWayContainer
} from "./style";
import order from "../../utils/order";
import translate from "../../utils/translate";
import { MainContext } from "../../context/mainContext";
import DiceRollWindow from "../DiceRollWindow";
import StatsWindow from "../StatsWindow";

const QuestionWindow = () => {
    const { title, page, setPage, list, subTitle,
        quantity, setQuantity, setSubTitle, sheet, setSheet, selected,
        setSelected, setTransitionAnimation, transitionAnimation } = useContext(MainContext);

    const [blockAnimation, setBlockAnimation] = useState(null);
    const [blockNameAnimation, setBlockNameAnimation] = useState(null);
    const [blockAgeAnimation, setBlockAgeAnimation] = useState(null);
    const [border, setBorder] = useState('black');
    const [textHelper, setTextHelper] = useState('Não sabe o que um dos itens na lista representa? Clique na caixinha de questão da linha em questão e veja!');
    const [name, setName] = useState<string>("");
    const [age, setAge] = useState<string>("");
    const [tendency, setTendency] = useState('NN');
    const [divinity, setDivinity] = useState();
    const [manual, setManual] = useState(false);


    const listPages = [
        "race", "class", "classHability", "raceHability",
        "equipment", "magic", "talent"
    ];
    useEffect(() => {
        const inputs = document.getElementsByTagName("input");
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].type === 'checkbox') {
                inputs[i].checked = false;
            }
        }
        setSelected([]);
    }, [list])

    const defineAnimation = () => {
        setTransitionAnimation(true);
        if (page === 'inicial') {
            setPage('race');
        }
        setTimeout(function () {
            setTransitionAnimation(false);
            clearTimeout();
        }, 1000);
    }

    const handleClick = (description) => {
        setTextHelper(description);
    }

    const changeQuantity = (e: BaseSyntheticEvent) => {
        if (e.target.checked) {
            setSubTitle(`Agora, você deve escolher ${quantity - 1} ${translate[page]}!`);
            setQuantity(quantity - 1);
            setSelected(produce(selected, draft => {
                draft.push(e.target.id);
            }));
        } else {
            setQuantity(quantity + 1);
            setSubTitle(`Agora, você deve escolher ${quantity + 1} ${translate[page]}!`);
            setSelected(produce(selected, draft => {
                draft.splice(e.target.id, 1);
            }));
        }
    }

    const handleNextClick = () => {
        if (quantity > 0) {
            setBlockAnimation(1);
            setBorder('red');
            setTimeout(function () {
                setBlockAnimation(null);
                clearTimeout();
            }, 300);
            setTimeout(function () {
                setBorder('black');
                clearTimeout();
            }, 1000);
        } else {
            if (listPages.indexOf(page) != -1) {
                setSheet(produce(sheet, draft => {
                    draft[page] = selected;
                }))
                setTransitionAnimation(true);
                setTimeout(function () {
                    setTransitionAnimation(false);
                    clearTimeout();
                }, 1000)
                setPage(order[page]);
            }
            if (page == 'name') {
                if (!name) {
                    setBlockNameAnimation(1);
                    setTimeout(function () {
                        setBlockNameAnimation(null);
                        clearTimeout();
                    }, 1000)
                    return;
                }
                if (!age) {
                    setBlockAgeAnimation(1);
                    setTimeout(function () {
                        setBlockAgeAnimation(null);
                        clearTimeout();
                    }, 1000)
                    return;
                }
                setSheet(produce(sheet, draft => {
                    draft.div = divinity;
                    draft.age = age;
                    draft.nome = name;
                    draft.tend = tendency;
                }))
                setPage(order[page]);
            }
            if (page === 'fill') {
                if (manual) {
                }
                if (!manual) {
                    setTransitionAnimation(true);
                    setTimeout(function () {
                        setTransitionAnimation(false);
                        clearTimeout();
                    }, 1000)
                    setPage("manual");
                }
            }
            if (page === 'manual') {
                setTransitionAnimation(true);
                setTimeout(function () {
                    setTransitionAnimation(false);
                    clearTimeout();
                }, 1000)
                setPage("stats");
            }
            console.log(sheet);
        }
    }

    const setWayFillStats = (way: boolean) => {
        setManual(way);
        handleNextClick();
    }

    const setBasicStats = (type: string, value: string) => {
        if (type === "name") {
            setName(value);
        }
        if (type === "age") {
            setAge(value);
        }
    }

    return (
        <Container animation={transitionAnimation}>
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
            {listPages.indexOf(page) !== -1 && (
                <QuestionContainer>
                    <NextContainer>
                        <NextButton onClick={() => handleNextClick()}>
                            <Img src="./before.png"></Img>
                        </NextButton>
                    </NextContainer>
                    <OptionsContainer>
                        <ListContainer animation={blockAnimation}>
                            <List border={border}>
                                {list ? (list.map((index, key) =>
                                    <RowContainer key={key}>
                                        <RowText>{index.name}</RowText>
                                        <Img
                                            onClick={() => handleClick(index.description)}
                                            id={index.name}
                                            src="./help_icon.svg"
                                        />
                                        <Check id={index.id} onClick={(e) => changeQuantity(e)} type="checkbox" />
                                    </RowContainer>
                                )) : (
                                    <></>
                                )}
                            </List>
                        </ListContainer>
                        <HelperContainer>
                            <RowContainer>
                                <HelperIconContainer>
                                    <Img
                                        src="./help_icon.svg"
                                    />
                                </HelperIconContainer>
                            </RowContainer>
                            <TextHelper readonly onChange={(e) => setTextHelper(e.target.value)} value={textHelper} />
                        </HelperContainer>
                    </OptionsContainer>
                    <NextContainer>
                        <NextButton onClick={() => handleNextClick()}>
                            <Img src="./next1.png"></Img>
                        </NextButton>
                    </NextContainer>
                </QuestionContainer>
            )}
            {page === 'name' && (
                <QuestionContainer>
                    <NextContainer>
                        <NextButton onClick={() => handleNextClick()}>
                            <Img src="./before.png"></Img>
                        </NextButton>
                    </NextContainer>
                    <BasicStatsContainer>
                        <FieldContainer animation={blockNameAnimation}>
                            <Span border={blockNameAnimation}>Nome:</Span>
                            <Field border={blockNameAnimation} value={name} onChange={(e) => setBasicStats("name", e.target.value)} />
                        </FieldContainer>
                        <FieldContainer animation={blockAgeAnimation}>
                            <Span border={blockAgeAnimation}>Idade:</Span>
                            <Field border={blockAgeAnimation} value={age} onChange={(e) => setBasicStats("age", e.target.value)} />
                        </FieldContainer>
                        <FieldContainer>
                            <Span>Tendência:</Span>
                            <Select onChange={(e) => setTendency(e.target.options[e.target.selectedIndex].id)}>
                                <option id="BL">Bom e Leal</option>
                                <option id="BN">Bom e Neutro</option>
                                <option id="BC">Bom e Caótico</option>
                                <option id="NL">Neutro e Leal</option>
                                <option id="NN">Neutro e Neutro</option>
                                <option id="NC">Neutro e Caótico</option>
                                <option id="ML">Mau e Leal</option>
                                <option id="MN">Mau e Neutro</option>
                                <option id="MC">Mau e Caótico</option>
                            </Select>
                        </FieldContainer>
                        <FieldContainer>
                            <Span>Divindade:</Span>
                            <Select onChange={(e) => setDivinity(e.target.options[e.target.selectedIndex].id)}>
                                <option id="Allihanna">Allihanna, Deusa da Natureza</option>
                                <option id="Azgher">Azgher, Deus do Sol</option>
                                <option id="Hyninn">Hyninn, Deus da Trapaça</option>
                                <option id="Kallyadranoch">Kallyadranoch, Deus dos Dragões</option>
                                <option id="Keenn">Keenn, Deus da Guerra</option>
                                <option id="Khalmyr">Khalmyr, Deus da Justiça</option>
                                <option id="Lena">Lena, Deusa da Vida</option>
                                <option id="LinWu">Lin-Wu, Deus de Tamu-ra</option>
                                <option id="Marah">Marah, Deusa da Paz</option>
                                <option id="Megalokk">Megalokk, Deus dos Monstros</option>
                                <option id="Nimb">Nimb, Deus do Caos</option>
                                <option id="Oceano">Oceano, Deus dos Mares</option>
                                <option id="Ragnar">Ragnar, Deus da Morte</option>
                                <option id="Sszzaas">Sszzaas, Deus da Traição</option>
                                <option id="TannaToh">Tanna-Toh, Deusa do Conhecimento</option>
                                <option id="Tauron">Tauron, Deus da Força</option>
                                <option id="Tenebra">Tenebra, Deusa da Noite</option>
                                <option id="Thyatis">Thyatis, Deus da Ressureição</option>
                                <option id="Valkaria">Valkaria, Deusa da Ambição</option>
                                <option id="Wynna">Wynna, Deusa da Magia</option>
                            </Select>
                        </FieldContainer>

                    </BasicStatsContainer>
                    <NextContainer>
                        <NextButton onClick={() => handleNextClick()}>
                            <Img src="./next1.png"></Img>
                        </NextButton>
                    </NextContainer>
                </QuestionContainer>
            )}
            {page === "fill" && (
                <FillWayContainer>
                    <NextContainer>
                        <NextButton onClick={() => handleNextClick()}>
                            <Img src="./before.png"></Img>
                        </NextButton>
                    </NextContainer>
                    <InitialPageContainer>
                        <BigButtonContainer>
                            <BigButton onClick={() => setWayFillStats(false)}><ButtonText><b>Girar os dados!</b></ButtonText></BigButton>
                            <BigButton onClick={() => setWayFillStats(true)}><ButtonText><b>Inserir valor personalizado!</b></ButtonText></BigButton>
                        </BigButtonContainer>
                    </InitialPageContainer>
                    <NextContainer>
                        <NextButton disabled>
                            <Img src="./next1.png"></Img>
                        </NextButton>
                    </NextContainer>
                </FillWayContainer>
            )}
            {page === 'manual' && (
                <QuestionContainer>
                    <NextContainer>
                        <NextButton onClick={() => handleNextClick()}>
                            <Img src="./before.png"></Img>
                        </NextButton>
                    </NextContainer>
                    <DiceRollWindow />
                    <NextContainer>
                        <NextButton disabled>
                            <Img src="./next1.png"></Img>
                        </NextButton>
                    </NextContainer>
                </QuestionContainer>
            )}
            {page === 'stats' && (
                <QuestionContainer>
                    <NextContainer>
                        <NextButton onClick={() => handleNextClick()}>
                            <Img src="./before.png"></Img>
                        </NextButton>
                    </NextContainer>
                    <StatsWindow />
                    <NextContainer>
                        <NextButton disabled>
                            <Img src="./next1.png"></Img>
                        </NextButton>
                    </NextContainer>
                </QuestionContainer>
            )}
        </Container>
    );
}

export default QuestionWindow;