import {MigrationInterface, QueryRunner,TableColumn} from "typeorm";

export class userValidate1629717668965 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("user", new TableColumn({
            name: "password",
            type: "varchar(500)"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("user", "password");
    }

}
