import { State, StateSelector } from '../types';
import { StateManager } from '../services';


export class QueryRunner<S extends State> {
    private readonly stateManager: StateManager<S>;

    constructor(stateManager: StateManager<S>) {
    this.stateManager = stateManager;
    }

    run<T extends StateSelector<S>>(selector: T): ReturnType<T> {
        return selector(this.stateManager.state) as ReturnType<T>;
    }
}
