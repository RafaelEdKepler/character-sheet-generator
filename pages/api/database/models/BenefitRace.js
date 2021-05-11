import {Column, Entity, ManyToOne, PrimaryColumn} from "typeorm";
import {Race} from "./Race";
import {v4 as uuid} from "uuid";

@Entity('benefits_races')
class BenefitsRace {
    @PrimaryColumn()
    id;

    @ManyToOne(() => Race, race => race.id)
    race;

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