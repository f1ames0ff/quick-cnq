import {Inject, Injectable} from "@angular/core";
import {State} from "../types/state.type";
import {NgCnqState} from "../providers/store.provider";


// export const INITIAL_STORE_STATE = new InjectionToken('INITIAL_STORE_STATE');

@Injectable()
export class NgCnqStore<S extends Record<string, unknown> = Record<string, unknown>> {

    constructor(@Inject(NgCnqState) private readonly state: S) {
    }

    private query(stateSelector: Partial<S>) {
        let data;

        // Object.keys(stateSelector).[0]

        return this.state
    }
}
