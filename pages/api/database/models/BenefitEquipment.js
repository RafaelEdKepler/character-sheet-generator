import {Column, Entity, ManyToOne, PrimaryColumn} from "typeorm";
import {Equipment} from "./Equipment";
import {v4 as uuid} from "uuid";

@Entity('benefits_equipments')
class BenefitsEquipment {
    @PrimaryColumn()
    id;

    @ManyToOne(() => Equipment, equipment => equipment.id)
    equipment;

    @Column()
    type;

    @Column()
    target;

    @Column()
    value;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }

}

export {BenefitEquipment};