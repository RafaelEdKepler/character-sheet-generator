import { createContext, useState } from 'react';

import { SheetInterface } from '../utils/interface';

interface MainContextData {
    sheet: SheetInterface,
    setSheet: (sheet: SheetInterface) => void,
    page: string,
    setPage: (page: string) => void,
    list: string,
    setList: (list: string) => void,
    desc: string,
    setDesc: (desc: string) => void
}


export const MainContext = createContext({} as MainContextData);

export function MainProvider({
    children
}) {
    const [sheet, setSheet] = useState<SheetInterface>();
    const [page, setPage] = useState<string>("login");
    const [list, setList] = useState<string>();
    const [desc, setDesc] = useState<string>();

    return (
        <MainContext.Provider value={{
            sheet,
            setSheet,
            page,
            setPage,
            list,
            setList,
            desc,
            setDesc
        }}>
            {children}
        </MainContext.Provider>
    )
}