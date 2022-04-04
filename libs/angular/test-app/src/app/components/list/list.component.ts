import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { User } from '../../services/user.service';
import { AppState } from '../../features/store/store-feature.module';
import { AppCommands } from '../../types/commands.enum';
import { Store } from '../../../../../core/src/services';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
    items: User[] = [];

    constructor(
        private readonly store: Store<AppState>,
        private readonly changeDetectorRef:ChangeDetectorRef
    ) {
    }

    ngOnInit() {
        this.store
            .listen(AppCommands.LOAD_USERS)
            .subscribe(data => {
                this.items = data.list;
                this.changeDetectorRef.markForCheck();
            });
    }

}
