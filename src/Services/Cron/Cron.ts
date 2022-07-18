class Cron {
    private cronTimer: number;

    public setCronTimer (timer: number): void {
        this.cronTimer = timer;
    }

    public isFinished (): boolean {
        return this.cronTimer > 0 ? false : true;
    }

    public async awaitForTimer () {
        const job = setInterval(() => {
            this.cronTimer -= 1;
            console.log(this.cronTimer);
        }, 1);

        setTimeout(() => {
            clearInterval(job)

            !this.isFinished() ? this.awaitForTimer() : true;
        }, 1);
    }
}

export default Cron;
