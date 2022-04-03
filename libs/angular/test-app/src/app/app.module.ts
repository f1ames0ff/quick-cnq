import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {RootComponent} from './components/root/root.component';
import {ListComponent} from './components/list/list.component';
import {AppStoreModule} from "./features/store/store-feature.module";
import {ControlsComponent} from './components/controls/controls.component';
import {HttpClientModule} from "@angular/common/http";
import { UserInfoComponent } from './components/user-info/user-info.component';

@NgModule({
    declarations: [
        RootComponent,
        ListComponent,
        ControlsComponent,
        UserInfoComponent
    ],
    imports: [
        BrowserModule,
        AppStoreModule,
        HttpClientModule
    ],
    bootstrap: [RootComponent]
})
export class AppModule {
}
