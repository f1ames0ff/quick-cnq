import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Store} from "../../features/store/services";
import {AppState} from "../../features/store/store-feature.module";
import {AppCommands} from "../../types/commands.enum";

@Component({
    selector: 'app-user-info',
    templateUrl: './user-info.component.html',
    styleUrls: ['./user-info.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserInfoComponent implements OnInit {
    id?: number;
    name?: string;

    constructor(
        private readonly store: Store<AppState>,
        private readonly changeDetectorRef:ChangeDetectorRef
    ) {
    }

    ngOnInit(): void {
        const {id, name} = this.store.query(state => state.user);

        this.id = id;
        this.name = name;

        this.store
            .listen(AppCommands.UPDATE_USER)
            .subscribe(data => {
                this.id = data.user.id;
                this.name = data.user.name;

                this.changeDetectorRef.markForCheck();
            });
    }
}
