import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { RaceHability } from "./RaceHability";
import { v4 as uuid } from "uuid";

@Entity('race_hability_pre_requisites')
class RaceHabilityPreRequisite {
    @PrimaryColumn()
    id;

    @ManyToOne(() => RaceHability, raceHability => raceHability.id)
    raceHability;

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

export { RaceHabilityPreRequisite };