import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { BasicDetails } from "./basic-details";
import { Observable } from "rxjs";
@Injectable()
export class BasicDetailsService {
  constructor(private http: HttpClient) {}

  fetchAllBasicDetails(): Observable<BasicDetails[]> {
    return this.http.get<BasicDetails[]>(
      "http://localhost:8080//homeIndustryRegistration/basicDetails"
    );
  }
}
