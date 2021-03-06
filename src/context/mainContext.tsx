import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

import { SheetInterface, TableInterface } from '../utils/interface';
import translate from '../utils/translate';

interface MainContextData {
    sheet: SheetInterface,
    setSheet: (sheet: SheetInterface) => void,
    page: string,
    setPage: (page: string) => void,
    list: TableInterface[],
    setList: (list: TableInterface[]) => void,
    desc: string,
    setDesc: (desc: string) => void,
    title: string,
    setTitle: (desc: string) => void,
    subTitle: string,
    setSubTitle: (subTitle: string) => void,
    quantity: number,
    setQuantity: (quantity: number) => void,
    selected: string[],
    setSelected: (selected: string[]) => void,
    dice: number,
    setDice: (dice: number) => void,
    quantityDice: number,
    setQuantityDice: (quantityDice: number) => void,
    transitionAnimation: boolean,
    setTransitionAnimation: (transitionAnimation: boolean) => void,
    manual: boolean,
    setManual: (manual: boolean) => void
}


export const MainContext = createContext({} as MainContextData);

export function MainProvider({
    children
}) {
    const [sheet, setSheet] = useState<SheetInterface>();
    const [page, setPage] = useState<string>("inicial");
    const [list, setList] = useState<TableInterface[]>();
    const [desc, setDesc] = useState<string>();
    const [title, setTitle] = useState<string>("SEJA BEM VINDO!");
    const [subTitle, setSubTitle] = useState<string>();
    const [quantity, setQuantity] = useState<number>(1);
    const [selected, setSelected] = useState<string[]>([]);
    const [dice, setDice] = useState<number>(1);
    const [quantityDice, setQuantityDice] = useState<number>(1);
    const [transitionAnimation, setTransitionAnimation] = useState<boolean>(false);
    const [manual, setManual] = useState<boolean>(false);

    useEffect(() => {
        if (page !== "inicial") {
            try {
                if (page === 'race') {
                    axios.get(`http://127.0.0.1:3333/race/list`).then((response) => {
                        setList(response.data.response);
                        setQuantity(response.data.quantity);
                        setSubTitle(`Agora, voc?? deve escolher ${response.data.quantity} ${translate[page]}!`)
                    });
                }
                if (page === 'class') {
                    axios.get(`http://127.0.0.1:3333/class/list`).then((response) => {
                        setList(response.data.response);
                        setQuantity(response.data.quantity);
                        setSubTitle(`Agora, voc?? deve escolher ${response.data.quantity} ${translate[page]}!`)
                    });
                }
                if (page === 'name') {
                    setQuantity(0);
                    setSubTitle(`Agora, voc?? deve escolher as informa????es b??sicas do seu personagem!`);
                }
                if (page === 'fill') {
                    setQuantity(0);
                    setSubTitle(`Agora, escolha a maneria que deseja informar o valor de suas habilidades!`);
                }
                if (page === 'habilityRace') {
                    axios.request({
                        method: "POST",
                        url: `http://127.0.0.1:3333/race/hability/list-with-dependencies`,
                        data: {
                            sheet: sheet
                        }
                    }).then((response) => {

                    })
                }
            } catch (e) {
                console.log(e);
            }
        }
        if (!sheet) {
            setBlankSheet();
        }
    }, [page]);

    const setBlankSheet = () => {
        setSheet({
            nome: '',
            race: '',
            class: '',
            level: 0,
            age: '',
            tend: '',
            tam: '',
            div: '',
            sex: '',
            size: '',
            desloc: '',
            hab: {
                FOR: 0,
                DES: 0,
                CON: 0,
                INT: 0,
                SAB: 0,
                CAR: 0
            },
            tes: {
                FOR: 0,
                VON: 0,
                REF: 0
            },
            sta: {
                CA: 0,
                PV: 0,
                PM: 0
            },
            perks: [
                {
                    name: '',
                    grad: 0,
                    mod: '',
                    another: 0
                }
            ],
            equipment: [
                {
                    name: '',
                    damage: '',
                    critic: '',
                    range: '',
                    type: '',
                    ca: '',
                    max_dex: '',
                    armor_penality: '',
                    local: '',
                    weight: 0
                }
            ],
            classHability: [
                {
                    name: '',
                    description: ''
                }
            ],
            raceHability: [
                {
                    name: '',
                    description: ''
                }
            ],
            talents: [
                {
                    name: '',
                    description: ''
                }
            ],
            magic: [
                {
                    name: '',
                    description: '',
                    level: 0,
                    type: ''
                }
            ],
            money: [
                {
                    tp: 0,
                    to: 0,
                    tl: 0
                }
            ],
            language: [
                {
                    name: ''
                }
            ]
        })
    }

    return (
        <MainContext.Provider value={{
            sheet,
            setSheet,
            page,
            setPage,
            list,
            setList,
            desc,
            setDesc,
            title,
            setTitle,
            subTitle,
            setSubTitle,
            quantity,
            setQuantity,
            selected,
            setSelected,
            dice,
            setDice,
            quantityDice,
            setQuantityDice,
            transitionAnimation,
            setTransitionAnimation,
            manual,
            setManual
        }}>
            {children}
        </MainContext.Provider>
    )
}