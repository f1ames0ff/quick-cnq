import {Inject, Injectable} from "@angular/core";
import {NgCnqStore} from "./store.service";
import {NgCnqState} from "../providers/store.provider";
import {State} from "../types/state.type";


@Injectable({
    providedIn: 'platform',
    deps: [NgCnqStore]
})
export class NgCnqQuery<S extends State> {
    constructor(@Inject(NgCnqState) private readonly state: S) {
    }

    run<F extends (param: S) => unknown>(selector: F): ReturnType<F> {
        return selector(this.state) as ReturnType<F>;
    }
}
