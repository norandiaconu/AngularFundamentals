import { Component, OnInit, Input } from "@angular/core";
import { Passenger } from "../passenger";

@Component({
  selector: "passenger-count",
  templateUrl: "./passenger-count.component.html",
  styleUrls: ["./passenger-count.component.css"]
})
export class PassengerCountComponent implements OnInit {
  @Input()
  items: Passenger[];

  constructor() { }

  ngOnInit() {
  }

  checkedInCount(): number {
    if (!this.items) return null;
    return this.items.filter((passenger: Passenger) => passenger.checkedIn).length;
  }

}
