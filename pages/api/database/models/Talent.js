import {Column, Entity, PrimaryColumn} from "typeorm";
import {v4 as uuid} from "uuid";

@Entity("talents")
class Talent {
    @PrimaryColumn()
    id;

    @Column()
    name;

    @Column()
    description;


    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}

export { Talent };