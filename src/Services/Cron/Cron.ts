class Cron {
    private cronTimer: number;

    public setCronTimer (timer: number): void {
        this.cronTimer = timer;
    }

    public decreaseBySecond (): Promise<unknown> {
        return new Promise(() => setTimeout(() => this.cronTimer -= 1, 1000));
    }

    public isZero (): boolean {
        return this.cronTimer > 0 ? false : true;
    }
}

export default Cron;
