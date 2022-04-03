import {NgModule} from "@angular/core";
import {NgCnqModule} from "./public-api";
import {User} from "../../services/user.service";

export const defState = {
    user: {
        id: 232141,
        name: 'Arnold Schwarzenegger',
    },
    list: [] as User[]
};
export type AppState = typeof defState;

@NgModule({
    imports: [
        NgCnqModule.forRoot(defState),
    ]
})
export class AppStoreModule {}
