import {State} from "./state.type";

export type StateSelector<S extends State> = (state: S) => unknown;
