import { Observable } from 'rxjs/Observable';
import { Http, HttpModule } from '@angular/http';
import { Injectable, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/combineLatest';

@Injectable()
export class FetchService{

  UsdToInr = 'http://www.apilayer.net/api/live?access_key=some_string';


  CexBtcUsd = 'https://cex.io/api/ticker/BTC/USD';
  CexBchUsd = 'https://cex.io/api/ticker/BCH/USD';
  CexEthUsd = 'https://cex.io/api/ticker/ETH/USD';

  ZebBtcInr = 'https://www.zebapi.com/api/v1/market/ticker/btc/inr';
  ZebBchInr = 'https://www.zebapi.com/api/v1/market/ticker/bch/inr';
  ZebEthInr = 'https://www.zebapi.com/api/v1/market/ticker/eth/inr';

  val: number;
   
  constructor(private http: Http) { 
    
  }

  getObservable() {

    let obs = Observable.combineLatest([
      this.http.get(this.UsdToInr).map(res => res.json()['quotes']['USDINR']),
      this.http.get(this.CexBtcUsd).map(res => res.json().last),
      this.http.get(this.CexBchUsd).map(res => res.json().last),
      this.http.get(this.CexEthUsd).map(res => res.json().last),
      this.http.get(this.ZebBtcInr).map(res => res.json().sell),
      this.http.get(this.ZebBchInr).map(res => res.json().sell),
      this.http.get(this.ZebEthInr).map(res => res.json().sell)
    ])
    return obs;
  }

}
