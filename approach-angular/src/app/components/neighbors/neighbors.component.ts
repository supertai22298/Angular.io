import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "app-neighbors",
  template: `
    <h3>{{ textFromChildren }}</h3>
  `,
  styleUrls: ["./neighbors.component.css"]
})
export class NeighborsComponent implements OnInit {
  textFromChildren: string;
  constructor(private _dataService: DataService) {}

  ngOnInit() {
    this.textFromChildren = this._dataService.textFromChildrens;
  }
}
