class Queue {
    constructor (
        private queue: Array<any> = []
    ) {}

    public enqueue(item: any): void {
        this.queue.push(item);
    }

    public dequeue(): any {
        return this.queue.shift();
    }

    public isEmpty(): boolean {
        return this.queue.length === 0 ? true : false;
    }
}

export default Queue;
