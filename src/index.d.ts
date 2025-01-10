
import { World } from "@rbxts/matter"
import Scheduler from "@rbxts/planck/out/Scheduler";
import { Plugin } from "@rbxts/planck/out/types";

declare class PlanckMatterDebuggerPlugin implements Plugin {
    constructor(worlds: Array<World>)
    build<T extends unknown[]>(scheduler: Scheduler<T>): void;
}

export = PlanckMatterDebuggerPlugin;