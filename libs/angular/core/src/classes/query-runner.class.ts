import { State, StateSelector } from '../types';
import { StateManager } from '../services';


export class QueryRunner<S extends State> {
    constructor(private readonly stateManager: StateManager<S>) {
    }

    run<T extends StateSelector<S>>(selector: T): ReturnType<T> {
        return selector(this.stateManager.state) as ReturnType<T>;
    }
}
