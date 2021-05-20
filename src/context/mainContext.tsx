import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

import { SheetInterface, TableInterface } from '../utils/interface';

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
    quantity: string,
    setQuantity: (quantity: string) => void
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
    const [quantity, setQuantity] = useState<string>("1");

    useEffect(() => {
        if (page !== "inicial") {
            try {
                const response = axios.get(`http://127.0.0.1:3333/race/list`).then((response) => {
                    setList(response.data.response);
                    setQuantity(response.data.quantity);
                    setSubTitle(`Agora, você deve escolher ${quantity} opções!`)
                });
            } catch (e) {
                console.log(e);
            }
        }
    }, [page]);

    const changeSubTitle = () => {

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
            setQuantity
        }}>
            {children}
        </MainContext.Provider>
    )
}