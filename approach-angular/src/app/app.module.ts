import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ChildrensComponent } from './components/childrens/childrens.component';
import { NeighborsComponent } from './components/neighbors/neighbors.component';

@NgModule({
  declarations: [AppComponent, ChildrensComponent, NeighborsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
