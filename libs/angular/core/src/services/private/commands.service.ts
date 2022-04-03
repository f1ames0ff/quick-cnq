import {Inject, Injectable} from '@angular/core';
import {Command} from "../../models";
import {INITIAL_STATE} from "../../providers";
import {State} from "../../types";
import {StateManager} from '../shared/state.service';

@Injectable()
export class CommandRunner<S extends State> {
    constructor(
        @Inject(INITIAL_STATE) private readonly state: S,
        private readonly stateManager: StateManager<S>,
    ) {
    }

    run({data}: Command<S>) {
        this.stateManager.mutate(data);
    }
}
