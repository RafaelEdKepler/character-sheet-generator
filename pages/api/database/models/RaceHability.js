import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

import { Race } from "./Race";

@Entity("race_habilities")
class RaceHability {
    @PrimaryColumn()
    id;

    @ManyToOne(() => Race, race => race.id)
    race;

    @Column()
    name;

    @Column()
    description;


    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { RaceHability };