import { Command } from '../models';
import { State } from '../types';
import { StateManager } from '../services';


export class CommandRunner<S extends State> {
    constructor(private stateManager: StateManager<S>) {
    }

    run({data}: Command<S>) {
        this.stateManager.mutate(data);
    }
}
