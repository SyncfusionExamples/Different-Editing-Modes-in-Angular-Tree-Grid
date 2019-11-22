import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

import {
  TreeGridModule,
  EditService,
  ToolbarService,
  CommandColumnService
} from "@syncfusion/ej2-angular-treegrid";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TreeGridModule],
  providers: [EditService, ToolbarService, CommandColumnService],
  bootstrap: [AppComponent]
})
export class AppModule {}
