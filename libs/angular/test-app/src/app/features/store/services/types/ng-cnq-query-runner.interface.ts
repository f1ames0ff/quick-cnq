import {State, StateSelector} from "../../types";

//
// type PredefinedReturn<
//     STATE extends State,
//     T extends (selector: (state: State) => T) => any
// > =
//     T extends (selector: infer ISelector) => any
//     ? ISelector extends <T>(state: State) => infer IReturn
//         ? (state: State) => IReturn
//         : ISelector
//     : T;
//
// export interface NgCnqQueryRunner<S extends State, T = <T>(selector: (state: State) => T) => any> {
//     run: PredefinedReturn<S, T>
// }
