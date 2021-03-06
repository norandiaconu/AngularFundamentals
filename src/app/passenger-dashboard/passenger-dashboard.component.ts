import { Component, OnInit } from "@angular/core";
import { Passenger } from "./passenger";

@Component({
  selector: "passenger-dashboard",
  templateUrl: "./passenger-dashboard.component.html",
  styleUrls: ["./passenger-dashboard.component.css"]
})
export class PassengerDashboardComponent implements OnInit {

  passengers: Passenger[];
  constructor() { }

  ngOnInit() {
    this.passengers = [{
      id: 1,
      fullname: "Stephen",
      checkedIn: false,
      checkedInDate: null,
      children: null
    }, {
      id: 2,
      fullname: "Rose",
      checkedIn: true,
      checkedInDate: 100000000,
      children: [{ name: "Ted", age: 12 }, { name: "Chloe", age: 7 }]
    }];
  }

  handleEdit(event: Passenger) {
    this.passengers = this.passengers.map((passenger: Passenger) => {
      if (passenger.id === event.id) {
        passenger = Object.assign({}, passenger, event);
      }
      return passenger;
    });
  }
  handleRemove(event: Passenger) {
    this.passengers = this.passengers.filter((passenger: Passenger) => {
      return passenger.id !== event.id;
    });
  }
}
