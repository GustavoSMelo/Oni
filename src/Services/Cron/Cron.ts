class Cron {
    private cronTimer: number;

    public setCronTimer (timer: number): void {
        this.cronTimer = timer;
    }

    public isFinished (): boolean {
        return this.cronTimer > 0 ? false : true;
    }

    public async awaitForTimer () {
        const jobInterval = setInterval(() => {
            this.cronTimer -= 1;
        }, 1);

        const jobTimeout = setTimeout(() => {
            clearInterval(jobInterval)

            if (!this.isFinished())
                this.awaitForTimer();
        }, 1);

        if (this.isFinished()) {
            await Promise.all([jobTimeout]);

            clearTimeout(jobTimeout);
            console.log('to na cron');
            return true;
        }
        return false;
    }
}

export default Cron;
