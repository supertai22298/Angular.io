import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DataService {
  private _textFromChildrens: string;

  public get textFromChildrens(): string {
    return this._textFromChildrens;
  }
  public set textFromChildrens(value: string) {
    this._textFromChildrens = value;
  }
}
