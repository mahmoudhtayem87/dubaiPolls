import {Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {createCustomElement} from "@angular/elements";
import { PollFormComponent } from './poll-form/poll-form.component';
import { PollResultComponent } from './poll-result/poll-result.component';

@NgModule({
  declarations: [
    AppComponent,
    PollFormComponent,
    PollResultComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {

    const PollFormComponentElement = createCustomElement(PollFormComponent, {
      injector: this.injector
    });
    customElements.define("lr-dubai-poll-form", PollFormComponentElement);

    const PollResultComponentElement = createCustomElement(PollResultComponent, {
      injector: this.injector
    });
    customElements.define("lr-dubai-poll-result", PollResultComponentElement);
  }
  ngDoBootstrap() { }
}
