interface CommandParams<T extends unknown = unknown> {
    type: string;
    data: T;
}

export class Command {
    type: string;
    data: unknown;

    constructor(params: CommandParams) {
        this.type = params.type;
        this.data = params.data;
    }
}
