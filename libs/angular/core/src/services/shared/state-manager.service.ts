import {Inject, Injectable} from "@angular/core";
import {State} from "../../types";
import {INITIAL_STATE} from "../../providers";
import {CommandData} from "../../models";

@Injectable({
    providedIn: 'root'
})
export class StateManager<S extends State> {
    private stateValue: S;

    constructor(
        // @Inject(INITIAL_STATE) private readonly initialState: S
    ) {
        this.stateValue = /*this.initialState;*/ {} as S
    }

    get state() {
        return this.stateValue;
    }

    private set state(value: S) {
        this.stateValue = value;
    }

    mutate(data: CommandData<S>) {
        this.state = {
            ...this.state,
            ...data
        };
    }
}
