import Redis from '../../Config/Redis';

class Queue {
    private constructor (
        private redis = new Redis().connectDatabase()
    ) {}

    private async getQueue(): Promise<Array<any>> {
        return (await (await this.redis).get('queue')).split(',');
    }

    public async enqueue(item: any) {
        const queue = await this.getQueue();
        await queue.push(item);

        await (await this.redis).set('queue', queue.join(','));
    }

    public async dequeue() {
        const queue = await this.getQueue();
        await (await this.redis).set('queue', queue.join(','));

        return queue.shift();
    }

    public async isEmpty() {
        const queue = await this.getQueue();
        return queue.length === 0;
    }
}

export default Queue;
