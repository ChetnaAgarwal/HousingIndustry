import { Component, OnInit } from "@angular/core";
import { BasicDetailsService } from "./basic-details.service";
import { BasicDetails } from "./basic-details";

import { STEP_ITEMS } from "./constants/multi-step-form";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  formContent: any;
  formData: any;
  activeStepIndex: number;

  constructor(private basicDetailsService: BasicDetailsService) {}

  ngOnInit(): void {
    this.formContent = STEP_ITEMS;
    this.formData = {};
  }

  onFormSubmit(formData: any): void {
    this.formData = formData;
    // post form data here
    alert(JSON.stringify(this.formData));
  }

  basicDetails: BasicDetails[] = [];
  private getBasicDetails() {
    this.basicDetailsService.fetchAllBasicDetails().subscribe(basicDetails => {
      this.basicDetails = basicDetails;
    });
  }
}
