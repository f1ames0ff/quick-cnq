import {State} from "../../types/state.type";
import {StateSelector} from "../../types/state-selector.type";

export interface NgCnqQueryRunner {
    run: <A extends StateSelector<State>, R = ReturnType<A>>(selector: A) => R
}
