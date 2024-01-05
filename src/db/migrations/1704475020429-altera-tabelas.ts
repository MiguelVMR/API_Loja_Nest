import { MigrationInterface, QueryRunner } from "typeorm";

export class AlteraTabelas1704475020429 implements MigrationInterface {
    name = 'AlteraTabelas1704475020429'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "produtos" DROP COLUMN "usuario_id"`);
        await queryRunner.query(`ALTER TABLE "usuarios" ADD "endereco" character varying(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuarios" DROP COLUMN "endereco"`);
        await queryRunner.query(`ALTER TABLE "produtos" ADD "usuario_id" character varying(100) NOT NULL`);
    }

}
