import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {INITIAL_STATE} from "./providers";
import {State} from "./types";


@NgModule()
export class NgCnqModule {
    // constructor(@Optional() @SkipSelf() parentModule?: NgCnqModule) {
    //     if (parentModule) {
    //         throw new Error(
    //             'NgCnqModule is already loaded. Import it in the AppModule only'
    //         );
    //     }
    // }

    static forRoot(clientState: State): ModuleWithProviders<NgCnqModule> {
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
}
