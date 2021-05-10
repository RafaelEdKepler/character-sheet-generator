import {Column, Entity, ManyToOne, PrimaryColumn} from "typeorm";
import {Magic} from "./Magic";
import {v4 as uuid} from "uuid";

@Entity('benefits_magics')
class BenefitsMagic {
    @PrimaryColumn()
    id;

    @ManyToOne(() => Magic, magic => magic.id)
    magic;

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

export {BenefitMagic};