import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { ClassHability } from "./ClassHability";
import { v4 as uuid } from "uuid";

@Entity('benefit_class_habilities')
class BenefitClassHability {
    @PrimaryColumn()
    id;

    @ManyToOne(() => ClassHability, classHability => classHability.id)
    classHability;

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

export { BenefitClassHability };