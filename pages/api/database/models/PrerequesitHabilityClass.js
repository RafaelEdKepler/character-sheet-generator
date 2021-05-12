import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { ClassHability } from "./ClassHability";
import { v4 as uuid } from "uuid";

@Entity('class_hability_pre_requisites')
class ClassHabilityPreRequisite {
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

export { ClassHabilityPreRequisite };