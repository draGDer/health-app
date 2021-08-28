import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createVaccine1628678549025 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "vaccine",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isGenerated: true,
                    isPrimary: true,
                    generationStrategy: "increment",
                    isUnique: true
                },
                {
                    name: "name",
                    type: "varchar(500)"
                },
                {
                    name: "vol",
                    type: "int"
                },
                {
                    name: "type",
                    type: "varchar(500)"
                },
                {
                    name: "created_at",
                    type : "timestamp",
                    default: 'CURRENT_TIMESTAMP'
                },
                {
                    name: "updated_at",
                    type : "timestamp",
                    isNullable: true,
                    default: null
                },
                {
                    name: "deleted_at",
                    type : "timestamp",
                    isNullable : true,
                    default: null
                }
            ]
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "vaccine"`);
    }

}
