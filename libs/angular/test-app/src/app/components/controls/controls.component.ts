import {Component} from '@angular/core';
import {Store} from '../../features/store/services';
import {AppState} from "../../features/store/store-feature.module";
import {UserService} from "../../services/user.service";

@Component({
    selector: 'app-controls',
    templateUrl: './controls.component.html',
    styleUrls: ['./controls.component.scss']
})
export class ControlsComponent {
    constructor(
        private readonly store: Store<AppState>,
        private readonly userService: UserService
    ) { }

    updateUserName() {
        this.userService.updateUserName();
    }

    loadUserList() {
        this.userService.loadUserList();
    }
}
