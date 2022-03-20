import {ModuleWithProviders, NgModule} from '@angular/core';
import {NgCnqCommand} from './services/commands.service';
import {NgCnqStore} from "./services/store.service";
import {NgCnqQuery} from "./services/query.service";
import {NgCnqState} from "./providers/store.provider";


@NgModule({
    imports: [],
    providers: [
        NgCnqStore,
        NgCnqCommand,
        NgCnqQuery,

    ]
})
export class NgCnqModule {
    static forRoot(clientState: Record<string, unknown>): ModuleWithProviders<NgCnqModule> {
        return {
            ngModule: NgCnqModule,
            providers: [
                {
                    provide: NgCnqState,
                    useValue: clientState
                }
            ]
        };
    }
}
