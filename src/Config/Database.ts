import { DataSource } from "typeorm";
import dotenv from 'dotenv';

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
            port: Number(process.env.DATABASE_PORT)
        });

        return dbConnection;
    }
}


export default DatabaseConnection;
