import {State, StateSelector} from "../../types";

export interface NgCnqQueryRunner {
    run: <A extends StateSelector<State>, R = ReturnType<A>>(selector: A) => R
}
