import {Inject, Injectable} from "@angular/core";
import {INITIAL_STATE} from "../../providers";
import {State, StateSelector} from "../../types";
import {NgCnqQueryRunner} from "../types";


@Injectable()
export class QueryRunner<S extends State> implements NgCnqQueryRunner {
    constructor(
        @Inject(INITIAL_STATE) private readonly state: S
    ) {
    }

    run(selector: StateSelector<S>) {
        return selector(this.state);
    }
}
