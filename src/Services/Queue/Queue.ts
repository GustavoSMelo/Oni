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

    public getFirst(): any {
        return this.queue[0] ? this.queue[0] : null;
    }

    public dequeue(): any {
        return this.queue.shift();
    }

    public isEmpty(): boolean {
        return this.getQueue() > 0 ? true : false;
    }

    public lenght(): number {
        return this.queue.length;
    }

    public clear(): void {
        this.queue = [];
    }
}

export default Queue;
