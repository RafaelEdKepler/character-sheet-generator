export interface TableInterface {
    name: string,
    description: string,
    id: string
    pre_requesits: string
}

export interface SheetInterface {
    nome: string,
    race: string,
    class: string,
    level: number,
    age: string,
    tend: string,
    tam: string,
    div: string,
    sex: string,
    size: string,
    desloc: string,
    hab: {
        FOR: number,
        DES: number,
        CON: number,
        INT: number,
        SAB: number,
        CAR: number
    },
    tes: {
        FOR: number,
        VON: number,
        REF: number
    },
    sta: {
        CA: number,
        PV: number,
        PM: number
    },
    perks: [
        {
            name: string,
            grad: number,
            mod: string,
            another: number
        }
    ],
    equipment: [
        {
            name: string,
            damage: string,
            critic: string,
            range: string,
            type: string,
            ca: string,
            max_dex: string,
            armor_penality: string,
            local: string,
            weight: number
        }
    ],
    classHability: [
        {
            name: string,
            description: string
        }
    ],
    raceHability: [
        {
            name: string,
            description: string
        }
    ],
    talents: [
        {
            name: string,
            description: string
        }
    ],
    magic: [
        {
            name: string,
            description: string,
            level: number,
            type: string
        }
    ],
    money: [
        {
            tp: number,
            to: number,
            tl: number
        }
    ],
    language: [
        {
            name: string
        }
    ]
};