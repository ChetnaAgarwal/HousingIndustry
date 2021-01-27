import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class CountriesService {
  constructor(private http: HttpClient) {}

  fetchAllCountries(): Observable<Object[]> {
    return this.http.get<Object[]>("https://restcountries.eu/rest/v2/all");
  }
}
