import {Inject, Injectable} from "@angular/core";
import {State, StateSelector} from "../../types";
import {Subject} from "rxjs";
import {INITIAL_STATE} from "../../providers";
import {QueryRunner} from "../private/query.service";
import {CommandRunner} from "../private/commands.service";
import {StateManager} from "./state-manager.service";
import {Command} from "../../models";


@Injectable({
    providedIn: 'platform',
    deps: [
        QueryRunner,
        CommandRunner
    ]
})
export class Store<S extends State> {
    private readonly listeners = new Map<number, Subject<S>>();

    constructor(
        @Inject(INITIAL_STATE) private readonly initialState: S,
        private readonly stateManager: StateManager<S>,
        private readonly commandRunner: CommandRunner<S>,
        private readonly queryRunner: QueryRunner<S>
    ) {
    }

    query<T extends StateSelector<S>>(selector: T): ReturnType<T> {
        return this.queryRunner.run(selector) as ReturnType<T>;
    }

    command(command: Command<S>): void {
        const {type} = command;

        this.commandRunner.run(command);
        this.callListener(type);
    }

    listen(type: number): Subject<S> {
        if (!this.listeners.has(type)) {
            this.addListener(type);
        }

        return this.listeners.get(type) as Subject<S>;
    }

    private callListener(type: number) {
        if (!this.listeners.has(type)) {
            this.addListener(type);
        }

        this.listeners
            .get(type)!
            .next(this.stateManager.state);
    }

    private addListener(type: number) {
        if (this.listeners.has(type)) return;

        const subject = new Subject<S>();

        subject.next(this.stateManager.state)
        this.listeners.set(type, subject);
    }
}
