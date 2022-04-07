import { Command } from '../models';
import { State } from '../types';
import { StateManager } from '../services';


export class CommandRunner<S extends State> {
    private stateManager: StateManager<S>;

    constructor(stateManager: StateManager<S>) {
     this.stateManager = stateManager;
    }

    run({data}: Command<S>) {
        this.stateManager.mutate(data);
    }
}
