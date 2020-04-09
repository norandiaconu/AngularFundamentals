import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from "@angular/core";
import { Passenger } from "../passenger";

@Component({
  selector: "passenger-detail",
  templateUrl: "./passenger-detail.component.html",
  styleUrls: ["./passenger-detail.component.css"]
})
export class PassengerDetailComponent implements OnInit, OnChanges {
  @Input()
  detail: Passenger;

  @Output()
  remove: EventEmitter<Passenger> = new EventEmitter();
  @Output()
  edit: EventEmitter<Passenger> = new EventEmitter();

  editing: boolean;

  constructor() {
    this.editing = false;
  }

  ngOnInit() {
  }
  ngOnChanges(changes) {
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
  }

  onNameChange(value: string) {
    this.detail.fullname = value;
  }
  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }
  onRemove() {
    this.remove.emit(this.detail);
  }
}
