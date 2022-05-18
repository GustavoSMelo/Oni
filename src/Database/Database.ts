import { DataSource } from "typeorm";
import * as dotenv from 'dotenv';
import * as path from 'path';

class DatabaseConnection {
    public constructor () {
        dotenv.config();
    }

    public config (): DataSource {
        const dbConnection = new DataSource({
            type: 'postgres',
            host: process.env.DATABASE_HOST,
            username: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            port: Number(process.env.DATABASE_PORT),
            migrations: [path.dirname + path.join('/Migrations/*.ts')],
            entities: [path.dirname + path.join('/Entity/*.ts')],
            synchronize: true
        });

        return dbConnection;
    }
}


export default DatabaseConnection;
