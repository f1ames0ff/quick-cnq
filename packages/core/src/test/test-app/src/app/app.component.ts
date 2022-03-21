import {Component} from '@angular/core';
import {QueryRunner} from "../../../../services/query.service";
import {AppState} from "./app.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-app';
  data: string;

  constructor(private readonly query: QueryRunner<AppState>) {
    this.data = query.run(state => state.address.street);
  }

}
