import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../../context/mainContext";
import produce from "immer";

import { RowContainer, Container, TextInput, TextHability, InputHability, ButtonReroll, Img } from "./style";


const StatsWindow = () => {

    const { sheet, dice, quantityDice, setSheet, manual } = useContext(MainContext);
    const [strength, setStrength] = useState<number>(0);
    const [dexterity, setDexterity] = useState<number>(0);
    const [constitution, setConstitution] = useState<number>(0);
    const [intelligence, setIntelligence] = useState<number>(0);
    const [wisdom, setWisdom] = useState<number>(0);
    const [charm, setCharm] = useState<number>(0);
    const [modifierStrength, setModifierStrength] = useState<number>(0);
    const [modifierDexterity, setModifierDexterity] = useState<number>(0);
    const [modifierConstitution, setModifierConstitution] = useState<number>(0);
    const [modifierIntelligence, setModifierIntelligence] = useState<number>(0);
    const [modifierWisdom, setModifierWisdom] = useState<number>(0);
    const [modifierCharm, setModifierCharm] = useState<number>(0);

    useEffect(() => {
        if (sheet) {
            setStrength(sheet.hab["FOR"]);
            setDexterity(sheet.hab["DES"]);
            setConstitution(sheet.hab["CON"]);
            setIntelligence(sheet.hab["INT"]);
            setWisdom(sheet.hab["SAB"]);
            setCharm(sheet.hab["CAR"]);

            if (sheet.hab["FOR"] > 1) {
                setModifierStrength(Math.trunc(sheet.hab["FOR"] / 2 + -5))
            } else {
                setModifierStrength(-5);
            }
            if (sheet.hab["DES"] > 1) {
                setModifierDexterity(Math.trunc(sheet.hab["DES"] / 2 + -5))
            } else {
                setModifierDexterity(-5);
            }
            if (sheet.hab["CON"] > 1) {
                setModifierConstitution(Math.trunc(sheet.hab["CON"] / 2 + -5))
            } else {
                setModifierConstitution(-5);
            }
            if (sheet.hab["INT"] > 1) {
                setModifierIntelligence(Math.trunc(sheet.hab["INT"] / 2 + -5))
            } else {
                setModifierIntelligence(-5);
            }
            if (sheet.hab["SAB"] > 1) {
                setModifierWisdom(Math.trunc(sheet.hab["SAB"] / 2 + -5))
            } else {
                setModifierWisdom(-5);
            }
            if (sheet.hab["CAR"] > 1) {
                setModifierCharm(Math.trunc(sheet.hab["CAR"] / 2 + -5))
            } else {
                setModifierCharm(-5);
            }
        }
    }, [sheet])

    const calculateStats = (attribute) => {
        let value = 0;
        for (let i = 0; i < quantityDice; i++) {
            value += Math.floor(Math.random() * (dice - 1) + 1);
        }

        setSheet(produce(sheet, draft => {
            draft.hab[attribute] = value;
        }));
    }

    const changeAttribute = (value, attribute) => {
        setSheet(produce(sheet, draft => {
            draft.hab[attribute] = value;
        }));
    }

    return (
        <Container>
            <RowContainer>
                <TextHability />
                <TextInput>Valor</TextInput>
                <TextInput>Modificador</TextInput>
            </RowContainer>
            <RowContainer>
                <TextHability>Força</TextHability>
                {manual ? (
                    <>
                        <InputHability type="number" min={1} max={999} disabled value={strength} width='52' onChange={(e) => changeAttribute(e.target.value, "FOR")} id="strength"></InputHability>
                        <InputHability value={modifierStrength} width='32' readonly onChange={() => console.log('')} id="strengthModifier"></InputHability>
                        <ButtonReroll onClick={() => calculateStats('FOR')}>
                            <Img
                                src="./Group.svg"
                            />
                        </ButtonReroll>
                    </>
                ) : (
                    <>
                        <InputHability type="number" min={1} max={999} value={strength} width='52' onChange={(e) => changeAttribute(e.target.value, "FOR")} id="strength"></InputHability>
                        <InputHability value={modifierStrength} width='32' readonly onChange={() => console.log('')} id="strengthModifier"></InputHability>
                        <ButtonReroll onClick={() => calculateStats('FOR')}>
                            <Img
                                src="./Group.svg"
                            />
                        </ButtonReroll>
                    </>
                )}
            </RowContainer>
            <RowContainer>
                <TextHability>Destreza</TextHability>
                {manual ? (
                    <>
                        <InputHability type="number" disabled min={1} max={999} value={dexterity} width='52' onChange={(e) => changeAttribute(e.target.value, "DES")} id="dexterity"></InputHability>
                        <InputHability value={modifierDexterity} width='32' readonly onChange={() => console.log('')} id="dexterityModifier"></InputHability>
                        <ButtonReroll onClick={() => calculateStats('DES')}>
                            <Img
                                src="./Group.svg"
                            />
                        </ButtonReroll>
                    </>
                ) : (
                    <>
                        <InputHability type="number" min={1} max={999} value={dexterity} width='52' onChange={(e) => changeAttribute(e.target.value, "DES")} id="dexterity"></InputHability>
                        <InputHability value={modifierDexterity} width='32' readonly onChange={() => console.log('')} id="dexterityModifier"></InputHability>
                        <ButtonReroll onClick={() => calculateStats('DES')}>
                            <Img
                                src="./Group.svg"
                            />
                        </ButtonReroll>
                    </>
                )}
            </RowContainer>
            <RowContainer>
                <TextHability>Constituição</TextHability>
                {manual ? (
                    <>
                        <InputHability disabled type="number" min={1} max={999} value={constitution} width='52' onChange={(e) => changeAttribute(e.target.value, "CON")} id="constitution"></InputHability>
                        <InputHability value={modifierConstitution} width='32' readonly onChange={() => console.log('')} id="constitutionModifier"></InputHability>
                        <ButtonReroll onClick={() => calculateStats('CON')}>
                            <Img
                                src="./Group.svg"
                            />
                        </ButtonReroll>
                    </>
                ) : (
                    <>
                        <InputHability type="number" min={1} max={999} value={constitution} width='52' onChange={(e) => changeAttribute(e.target.value, "CON")} id="constitution"></InputHability>
                        <InputHability value={modifierConstitution} width='32' readonly onChange={() => console.log('')} id="constitutionModifier"></InputHability>
                        <ButtonReroll onClick={() => calculateStats('CON')}>
                            <Img
                                src="./Group.svg"
                            />
                        </ButtonReroll>
                    </>
                )}
            </RowContainer>
            <RowContainer>
                <TextHability>Inteligência</TextHability>
                {manual ? (
                    <>
                        <InputHability disabled type="number" min={1} max={999} value={intelligence} width='52' onChange={(e) => changeAttribute(e.target.value, "INT")} id="intelligence"></InputHability>
                        <InputHability value={modifierIntelligence} width='32' readonly onChange={() => console.log('')} id="intelligencehModifier"></InputHability>
                        <ButtonReroll onClick={() => calculateStats('INT')}>
                            <Img
                                src="./Group.svg"
                            />
                        </ButtonReroll>
                    </>
                ) : (
                    <>
                        <InputHability type="number" min={1} max={999} value={intelligence} width='52' onChange={(e) => changeAttribute(e.target.value, "INT")} id="intelligence"></InputHability>
                        <InputHability value={modifierIntelligence} width='32' readonly onChange={() => console.log('')} id="intelligencehModifier"></InputHability>
                        <ButtonReroll onClick={() => calculateStats('INT')}>
                            <Img
                                src="./Group.svg"
                            />
                        </ButtonReroll>
                    </>
                )}
            </RowContainer>
            <RowContainer>
                <TextHability>Sabedoria</TextHability>
                {manual ? (
                    <>
                        <InputHability disabled type="number" min={1} max={999} value={wisdom} width='52' onChange={(e) => changeAttribute(e.target.value, "SAB")} id="wisdom"></InputHability>
                        <InputHability value={modifierWisdom} width='32' readonly onChange={() => console.log('')} id="wisdomModifier" ></InputHability>
                        <ButtonReroll onClick={() => calculateStats('SAB')}>
                            <Img
                                src="./Group.svg"
                            />
                        </ButtonReroll>
                    </>
                ) : (
                    <>
                        <InputHability type="number" min={1} max={999} value={wisdom} width='52' onChange={(e) => changeAttribute(e.target.value, "SAB")} id="wisdom"></InputHability>
                        <InputHability value={modifierWisdom} width='32' readonly onChange={() => console.log('')} id="wisdomModifier" ></InputHability>
                        <ButtonReroll onClick={() => calculateStats('SAB')}>
                            <Img
                                src="./Group.svg"
                            />
                        </ButtonReroll>
                    </>
                )}
            </RowContainer>
            <RowContainer>
                <TextHability>Carisma</TextHability>
                {manual ? (
                    <>
                        <InputHability disabled type="number" min={1} max={999} value={charm} width='52' onChange={(e) => changeAttribute(e.target.value, "CAR")} id="charm"></InputHability>
                        <InputHability value={modifierCharm} width='32' readonly onChange={() => console.log('')} id="charmModifier"></InputHability>
                        <ButtonReroll onClick={() => calculateStats('CAR')}>
                            <Img
                                src="./Group.svg"
                            />
                        </ButtonReroll>
                    </>
                ) : (
                    <>
                        <InputHability type="number" min={1} max={999} value={charm} width='52' onChange={(e) => changeAttribute(e.target.value, "CAR")} id="charm"></InputHability>
                        <InputHability value={modifierCharm} width='32' readonly onChange={() => console.log('')} id="charmModifier"></InputHability>
                        <ButtonReroll onClick={() => calculateStats('CAR')}>
                            <Img
                                src="./Group.svg"
                            />
                        </ButtonReroll>
                    </>
                )}
            </RowContainer>
        </Container>
    )
}

export default StatsWindow;