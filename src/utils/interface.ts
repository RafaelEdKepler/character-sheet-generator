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
        FOR: string,
        DES: string,
        CON: string,
        INT: string,
        SAB: string,
        CAR: string
    },
    tes: {
        FOR: string,
        VON: string,
        REF: string
    },
    sta: {
        CA: string,
        PV: string,
        PM: string
    },
    perks: [
        {
            name: string,
            grad: number,
            mod: number,
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