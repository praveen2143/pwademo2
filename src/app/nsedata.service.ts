import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";


export interface Scrip {
  symbol: string;
  open: string;
  high: string;
  low: string;
  ltP: string;
  ptsC: string;
}


@Injectable({
  providedIn: 'root'
})
export class NsedataService {

  constructor(private http: HttpClient) { }

 baseUrl: string = 'https://www.nseindia.com/live_market/dynaContent/live_watch/stock_watch/niftyStockWatch.json';




 getData() {
   return this.http.get(this.baseUrl)
     .pipe(map(res => res));
 }
}
