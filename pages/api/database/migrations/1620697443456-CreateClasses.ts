import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateClasses1620697443456 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "classes",

            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
