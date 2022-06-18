import { createClient } from 'redis';

class RedisConfig {
    public async connectDatabase(env = 'development', url?: string) {
        const client = env === 'development' || env === 'localhost' ?
            createClient() :
            createClient({ url });

        client.on('error', error => console.error(`[Redis Connection Error]: ${error}`));

        await client.connect();

        return client;
    }
}

export default RedisConfig;
