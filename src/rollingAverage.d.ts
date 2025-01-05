
interface RollingAverage {
    addSample(samples: Array<number>, sample: number): void;
    getAverage(samples: Array<number>): number;
}

declare const RollingAverage: RollingAverage;
export = RollingAverage;