import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommandRunner} from './services/commands.service';
import {Store} from "./services/store.service";
import {QueryRunner} from "./services/query.service";
import {INITIAL_STATE} from "./providers/store.provider";
import {StateManager} from "./services/state.service";


@NgModule({
    imports: [],
    providers: [
        Store,
        CommandRunner,
        QueryRunner,
        StateManager
    ]
})
export class NgCnqModule {
    static forRoot(clientState: Record<string, unknown>): ModuleWithProviders<NgCnqModule> {
        return {
            ngModule: NgCnqModule,
            providers: [
                {
                    provide: INITIAL_STATE,
                    useValue: clientState
                }
            ]
        };
    }

    constructor(@Optional() @SkipSelf() parentModule?: NgCnqModule) {
        if (parentModule) {
            throw new Error(
                'NgCnqModule is already loaded. Import it in the AppModule only'
            );
        }
    }
}
