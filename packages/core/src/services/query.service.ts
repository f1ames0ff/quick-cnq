import {Inject, Injectable} from "@angular/core";
import {INITIAL_STATE} from "../providers/store.provider";
import {State} from "../types/state.type";
import {StateSelector} from "../types/state-selector.type";
import {NgCnqQueryRunner} from "./types/ng-cnq-query-runner.interface";


@Injectable()
export class QueryRunner<S extends State> implements NgCnqQueryRunner {
    constructor(
        @Inject(INITIAL_STATE) private readonly state: S
    ) {}

    run(selector: StateSelector<S>) {
        return selector(this.state);
    }
}
