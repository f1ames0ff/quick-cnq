import {Command} from "../../models";
import {State} from "../../types";
import {StateManager} from '../shared/state-manager.service';
import {Injectable} from "@angular/core";


@Injectable()
export class CommandRunner<S extends State> {
    constructor(private readonly stateManager: StateManager<S>) {
    }

    run({data}: Command<S>) {
        this.stateManager.mutate(data);
    }
}
