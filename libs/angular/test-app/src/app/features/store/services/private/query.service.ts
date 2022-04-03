import {State, StateSelector} from "../../types";
import {Injectable} from "@angular/core";
import {StateManager} from "../shared/state-manager.service";


@Injectable()
export class QueryRunner<S extends State> {
    constructor(private readonly stateManager: StateManager<S>) {
    }

    run<T extends StateSelector<S>>(selector: T): ReturnType<T> {
        return selector(this.stateManager.state) as ReturnType<T>;
    }
}
