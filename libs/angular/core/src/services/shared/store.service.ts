import {Injectable, Optional} from "@angular/core";
import {State} from "../../types";
import {Subject} from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class Test {
}


@Injectable({
    providedIn: 'root',
    deps: []
})
export class Store<S extends State> {
    private readonly listeners = new Map<number, Subject<S>>();

    constructor(
        // @Inject(INITIAL_STATE) private readonly initialState: S,
        // private readonly queryRunner: QueryRunner<S>,
        // private readonly commandRunner: CommandRunner<S>,
        // private readonly stateManager:StateManager<S>
        private readonly test: Test
    ) {
    }

    // query(stateSelector: StateSelector<S>) {
    //     return this.queryRunner.run(stateSelector);
    // }
    //
    // command(command: Command<S>){
    //     this.addListener(command.type);
    //
    //     return this.commandRunner.run(command);
    // }
    //
    // listen(type: number): Subject<S> | undefined {
    //     return this.listeners.get(type);
    // }
    //
    // private addListener(type: number) {
    //     if(!this.listeners.has(type)) {
    //         const subject = new Subject<S>();
    //
    //         subject.next(this.stateManager.state)
    //
    //         this.listeners.set(type, subject);
    //     }
    // }
}
