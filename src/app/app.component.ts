import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dubaiPolls';
  private _articleID = 0;
  public get articleID(): number {
    return this._articleID;
  }



  @Input('article')
  set articleID(value: number) {
    this._articleID = value;
  }
}
