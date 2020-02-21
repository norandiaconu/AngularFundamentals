import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["app.component.css"],
  templateUrl: "./app.component.html"
})
export class AppComponent {
  title: string;
  numberOne = 1;
  numberTwo = 2;
  isHappy = true;
  logo = "assets/img/logo.svg";
  name = "Name";
  handleClick() {
    this.name = "Name";
  }
  handleClick2(value: string) {
    this.name = value;
  }
  handleInput(event: any) {
    this.name = event.target.value;
  }
  handleBlur(event: any) {
    this.name = event.target.value;
    console.log(event);
  }
  handleChange(value: string) {
    this.name = value;
  }
  constructor() {
    this.title = "Ultimate Angular";
  }
}
