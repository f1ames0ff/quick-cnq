import {Inject, Injectable} from "@angular/core";
import {INITIAL_STATE} from "../providers/store.provider";
import {QueryRunner} from "./query.service";
import {Command} from "../models/Command";
import {CommandRunner} from "./commands.service";
import {State} from "../types/state.type";
import {StateSelector} from "../types/state-selector.type";
import { Subject} from "rxjs";
import {StateManager} from "./state.service";



@Injectable()
export class Store<S extends State> {
    private readonly listeners = new Map<number, Subject<S>>() ;

    constructor(
        @Inject(INITIAL_STATE) private readonly initialState: S,
        private readonly queryRunner: QueryRunner<S>,
        private readonly commandRunner: CommandRunner<S>,
        private readonly stateManager:StateManager<S>
    ) {}

    query(stateSelector: StateSelector<S>) {
        return this.queryRunner.run(stateSelector);
    }

    command(command: Command<S>){
        this.addListener(command.type);

        // return this.commandRunner.run(command);
    }

    listen(type: number): Subject<S> | undefined {
        return this.listeners.get(type);
    }

    private addListener(type: number) {
        if(!this.listeners.has(type)) {
            const subject = new Subject<S>();

            subject.next(this.stateManager.state)

            this.listeners.set(type, subject);
        }
    }
}
