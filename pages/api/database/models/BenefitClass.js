import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Class } from "./Class";
import { v4 as uuid } from "uuid";

@Entity('benefit_classes')
class BenefitClass {
    @PrimaryColumn()
    id;

    @ManyToOne(() => Class, classe => classe.id)
    class;

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

export { BenefitClass };