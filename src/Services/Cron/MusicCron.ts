class MusicCron {

    private cronTimer: number;

    public constructor (
        cronTimer: number
    ) { this.cronTimer = cronTimer; }

    public async decreaseBySecond () {
        await setInterval(() =>  this.cronTimer -= 1, 1);
    }

    public isZero (): boolean {
        return this.cronTimer > 0 ? true : false
    }
}
