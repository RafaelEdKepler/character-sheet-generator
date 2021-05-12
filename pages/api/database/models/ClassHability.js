import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

import { Class } from "./Class";

@Entity("class_habilities")
class ClassHability {
    @PrimaryColumn()
    id;

    @ManyToOne(() => Class, classe => classe.id)
    class;

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

export { ClassHability };