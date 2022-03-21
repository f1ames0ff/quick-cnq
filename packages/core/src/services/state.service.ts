import {Inject, Injectable} from "@angular/core";
import {State} from "../types/state.type";
import {INITIAL_STATE} from "../providers/store.provider";
import {CommandData} from "../models/Command";

@Injectable()
export class StateManager<S extends State> {
    private value: S;

    constructor(@Inject(INITIAL_STATE) private readonly initialState: S) {
        this.value = this.initialState;
    }

    get state() {
        return this.value;
    }

    private set state(value: S) {
        this.value = value;
    }

    mutate(data: CommandData<S>) {
        this.state = {
            ...this.state,
            ...data
        };
    }
}
