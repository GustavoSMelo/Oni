class Cron {
    private cronTimer: number;

    public setCronTimer (timer: number): void {
        this.cronTimer = timer;
    }

    public async awaitForTimer (): Promise<void> {
        const job = setInterval(() => {
            this.cronTimer -= 1;
            console.log(this.cronTimer);
        }, 1000);

        if (this.isFinished()) {
            clearInterval(job);
        }
    }

    public isFinished (): boolean {
        return this.cronTimer > 0 ? false : true;
    }
}

export default Cron;
