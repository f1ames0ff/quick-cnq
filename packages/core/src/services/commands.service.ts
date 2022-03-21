import {Inject, Injectable} from '@angular/core';
import {Command} from "../models/Command";
import {INITIAL_STATE} from "../providers/store.provider";
import {State} from "../types/state.type";
import {StateManager} from "./state.service";

@Injectable()
export class CommandRunner<S extends State> {
    constructor(
        @Inject(INITIAL_STATE) private readonly state: S,
        private  readonly stateManager :StateManager<S>,

    ) {}

    run({ data }: Command<S>){
        this.stateManager.mutate(data);
    }
}
