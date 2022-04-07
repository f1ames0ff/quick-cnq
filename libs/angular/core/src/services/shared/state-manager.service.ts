import { Inject, Injectable } from '@angular/core';
import { State } from '../../types';
import { CommandData } from '../../models';
import { NgCnqModule } from '../../ngcnq.module';
import { INITIAL_STATE } from '../../providers';

@Injectable({
    providedIn: NgCnqModule
})
export class StateManager<S extends State> {
    // private stateValue: S;

    constructor(
        // @Inject(INITIAL_STATE) private readonly initialState: S
    ) {
        // this.stateValue = this.initialState;
    }

    get state() {
        // return this.stateValue;
        return {} as S;
    }

    private set state(value: S) {
        // this.stateValue = value;
    }

    mutate(data: CommandData<S>) {
        this.state = {
            ...this.state,
            ...data
        };
    }
}
