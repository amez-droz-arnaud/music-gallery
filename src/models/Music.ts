
export abstract  class Music {

    duration_s: number

    constructor(duration_s: number){
        this.duration_s = duration_s
    }

    formatDuration(): string {
        const minutes = Math.floor(this.duration_s / 60);
        const seconds = String(this.duration_s % 60).padStart(2, '0');
        return `${minutes}:${seconds}`;
    }
}