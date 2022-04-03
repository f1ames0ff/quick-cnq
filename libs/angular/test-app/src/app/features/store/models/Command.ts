import {State} from "../types";
import {RecursivePartial} from "../types/recursive-partial.type";


export type CommandData<D extends State> = RecursivePartial<D>;

export interface CommandParams<T extends State> {
    type: number;
    data: CommandData<T>;
}

// TODO: Maybe excessive. Replace with interface?
export class Command<T extends State> {
    type: number;
    data: CommandData<T>;

    constructor(params: CommandParams<T>) {
        this.type = params.type;
        this.data = params.data;
    }
}
