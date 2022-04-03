import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppState} from "../features/store/store-feature.module";
import {Store} from "../features/store/services";
import {Command} from '../features/store/models';
import {AppCommands} from "../types/commands.enum";

export interface User {
    id: string;
    name: string
}

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private readonly BASE_URL = 'https://6249bf3afd7e30c51c05db55.mockapi.io/api/v1';

    constructor(
        private readonly httpClient: HttpClient,
        private readonly store: Store<AppState>,
    ) {
    }

    loadUserList(): void {
        const url = `${this.BASE_URL}/users`;

        this.httpClient
            .get<User[]>(url)
            .subscribe(userList => {
                this.store.command(new Command<AppState>({
                    type: AppCommands.LOAD_USERS,
                    data: {
                        list: userList
                    }
                }));
            });
    }

    updateUserName() {
        const command = new Command<AppState>({
            type: AppCommands.UPDATE_USER,
            data: {
                user: {
                    name: 'Sylvester Stallone'
                }
            }
        })

        this.store.command(command);
    }
}
