class Cron {
    private cronTimer: number;

    public setCronTimer (timer: number): void {
        this.cronTimer = timer;
    }

    public async decreaseBySecond (): Promise<void> {
        const timer = new Promise(() => setTimeout(() => this.cronTimer -= 1, 1000));
        await Promise.all([timer]);
    }

    public isZero (): boolean {
        return this.cronTimer > 0 ? false : true;
    }
}

export default Cron;
