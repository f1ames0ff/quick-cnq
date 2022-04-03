import {State} from "../types";


export type CommandData<D extends State> = Partial<D>;

export interface CommandParams<T extends State> {
    type: number;
    data: CommandData<T>;
}

export class Command<T extends State> {
    type: number;
    data: CommandData<T>;

    constructor(params: CommandParams<T>) {
        this.type = params.type;
        this.data = params.data;
    }
}
