import {Column, Entity, ManyToOne, PrimaryColumn} from "typeorm";
import {Talent} from "./Race";
import {v4 as uuid} from "uuid";

@Entity('benefits_talents')
class BenefitsTalent {
    @PrimaryColumn()
    id;

    @ManyToOne(() => Talent, talent => talent.id)
    talent;

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

export {BenefitRace};