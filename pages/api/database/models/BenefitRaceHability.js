import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { RaceHability } from "./RaceHability";
import { v4 as uuid } from "uuid";

@Entity('benefit_race_habilities')
class BenefitsRaceHability {
    @PrimaryColumn()
    id;

    @ManyToOne(() => RaceHability, raceHability => raceHability.id)
    race_hability;

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

export { BenefitRace };