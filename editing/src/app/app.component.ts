import { Component, OnInit } from "@angular/core";
import { sampleData } from "./datasource";
import { EditSettingsModel } from "@syncfusion/ej2-angular-treegrid";
import { CommandModel } from "@syncfusion/ej2-grids";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  public data: Object[] = [];
  public editSettings: EditSettingsModel;
  public toolbar: String[];
  public numericParams: Object;
  public commands: CommandModel[];

  ngOnInit(): void {
    this.data = sampleData;
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      mode: "Row"
    };
    this.toolbar = ["Add", "Edit", "Delete", "Update", "Cancel"];
    this.numericParams = { params: { format: "n" } };
    this.commands = [
      {
        type: "Edit",
        buttonOption: { iconCss: " e-icons e-edit", cssClass: "e-flat" }
      },
      {
        type: "Delete",
        buttonOption: { iconCss: "e-icons e-delete", cssClass: "e-flat" }
      },
      {
        type: "Save",
        buttonOption: { iconCss: "e-icons e-update", cssClass: "e-flat" }
      },
      {
        type: "Cancel",
        buttonOption: { iconCss: "e-icons e-cancel-icon", cssClass: "e-flat" }
      }
    ];
  }
}
