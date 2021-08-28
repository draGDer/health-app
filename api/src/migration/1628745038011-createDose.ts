import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class createDose1628745038011 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "dose",
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
                    name: "user_id",
                    type: "int"
                },
                {
                    name: "vaccine_id",
                    type: "int"
                },
                {
                    name: "location",
                    type: "varchar(500)"
                },
                {
                    name: "admin_date",
                    type: "date",
                },
                {
                    name: "dose_number",
                    type: "int"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: 'CURRENT_TIMESTAMP'
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    isNullable: true,
                    default: null
                },
                {
                    name: "deleted_at",
                    type: "timestamp",
                    isNullable: true,
                    default: null
                }
            ]
        }), true);
        await queryRunner.createForeignKey("dose", new TableForeignKey({
            columnNames: ["user_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "user",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        }));
        await queryRunner.createForeignKey("dose", new TableForeignKey({
            columnNames: ["vaccine_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "vaccine",
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "dose"`);
    }

}