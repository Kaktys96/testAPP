import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUser1695883116683 implements MigrationInterface {
    name = 'CreateUser1695883116683';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "user" ("id" SERIAL PRIMARY KEY, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "age" integer NOT NULL, "gender" character varying NOT NULL, "hasProblems" boolean NOT NULL DEFAULT true)`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }
}
