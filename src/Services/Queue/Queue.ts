class Queue {
    public constructor (
        private queue: Array<any>
    ) {}

    private getQueue(): any {
        return this.queue;
    }

    public enqueue(item: any): any {
        this.queue.push(item);
    }

    public dequeue(): any {
        const element = this.queue.shift();

        return element
    }

    public isEmpty(): boolean {
        return this.getQueue() > 0 ? true : false;
    }
}

export default Queue;
