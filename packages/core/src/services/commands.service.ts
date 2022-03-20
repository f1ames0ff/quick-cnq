import {Injectable} from '@angular/core';
import {Command} from "../models/Command";
import {NgCnqStore} from "./store.service";

@Injectable({
    providedIn: 'platform',
    deps: [NgCnqStore]
})
export class NgCnqCommand {
    constructor() {
    }

    execute(command: Command){

    }
}
