import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateStarWarsUserTable1652827026703 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'star_wars_user',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true
                },
                {
                    name: 'userId',
                    type: 'varchar',
                    isNullable: false,
                    isUnique: true
                },
                {
                    name: 'role',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'side',
                    type: 'varchar',
                    isNullable: false
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('star_wars_user')
    }
}
