import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { NasaObject } from "./nasaObject";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})

export class SearchObject {

   constructor(private httpClient: HttpClient) {}

  getAppareilsFromServer(name:string): Observable<NasaObject>{
    return this.httpClient.get<NasaObject>(`https://images-api.nasa.gov/search?q=${name}`)
  }

}
