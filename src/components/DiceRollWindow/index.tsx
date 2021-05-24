import React, { useContext, useState } from "react";
import { MainContext } from "../../context/mainContext";

import produce from "immer";

import { Container, RowContainer, DiceContainer, Dice, Img, Input, QuantityContainer, Titulo } from "./style";

const DiceRollWindow = () => {

    const [quantity, setQuantity] = useState<number>(1);

    const { sheet, setSheet, setPage, setQuantityDice, setDice } = useContext(MainContext);

    const calculateStats = (dice: number) => {
        let strenght = 0;
        let dexterity = 0;
        let constitution = 0;
        let inteligence = 0;
        let wisdom = 0;
        let charm = 0;
        setDice(dice);
        setQuantityDice(quantity);
        for (let i = 0; i < quantity; i++) {
            strenght += Math.floor(Math.random() * (dice - 1) + 1);
            dexterity += Math.floor(Math.random() * (dice - 1) + 1);
            constitution += Math.floor(Math.random() * (dice - 1) + 1);
            inteligence += Math.floor(Math.random() * (dice - 1) + 1);
            wisdom += Math.floor(Math.random() * (dice - 1) + 1);
            charm += Math.floor(Math.random() * (dice - 1) + 1);
        }

        setSheet(produce(sheet, draft => {
            draft.hab["FOR"] = strenght;
            draft.hab["DES"] = dexterity;
            draft.hab["CON"] = constitution;
            draft.hab["INT"] = inteligence;
            draft.hab["SAB"] = wisdom;
            draft.hab["CAR"] = charm;
        }));
        setPage("stats");
    }

    return (
        <Container>
            <RowContainer>
                <QuantityContainer>
                    <Titulo>Quantidade:</Titulo>
                    <Input onChange={(e) => setQuantity(e.target.value)}>
                        <option value="1">1 dado</option>
                        <option value="2">2 dados</option>
                        <option value="3">3 dados</option>
                        <option value="4">4 dados</option>
                        <option value="5">5 dados</option>
                        <option value="6">6 dados</option>
                        <option value="7">7 dados</option>
                        <option value="8">8 dados</option>
                        <option value="9">9 dados</option>
                        <option value="10">10 dados</option>
                    </Input>
                </QuantityContainer>
            </RowContainer>
            <RowContainer>
                <DiceContainer>
                    <Dice onClick={() => calculateStats(4)}>
                        <Img src="./d4.png" />
                    </Dice>
                    <span><b>4 lados</b></span>
                </DiceContainer>
                <DiceContainer>
                    <Dice onClick={() => calculateStats(6)}>
                        <Img src="./d6.png" />
                    </Dice>
                    <span><b>6 lados</b></span>
                </DiceContainer>
            </RowContainer>
            <RowContainer>
                <DiceContainer>
                    <Dice onClick={() => calculateStats(8)}>
                        <Img src="./d8.png" />
                    </Dice>
                    <span><b>8 lados</b></span>
                </DiceContainer>
                <DiceContainer>
                    <Dice onClick={() => calculateStats(10)}>
                        <Img src="./d10.png" />
                    </Dice>
                    <span><b>10 lados</b></span>
                </DiceContainer>
            </RowContainer>
            <RowContainer>
                <DiceContainer>
                    <Dice onClick={() => calculateStats(12)}>
                        <Img src="./d12.png" />
                    </Dice>
                    <span><b>12 lados</b></span>
                </DiceContainer>
                <DiceContainer>
                    <Dice onClick={() => calculateStats(20)}>
                        <Img src="./d20.png" />
                    </Dice>
                    <span><b>20 lados</b></span>
                </DiceContainer>
            </RowContainer>
        </Container>
    );
}

export default DiceRollWindow;