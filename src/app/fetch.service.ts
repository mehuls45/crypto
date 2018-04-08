import { Observable } from 'rxjs/Observable';
import { Http, HttpModule } from '@angular/http';
import { Injectable, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/combineLatest';

@Injectable()
export class FetchService{

  UsdToInr = 'http://www.apilayer.net/api/live?access_key=3d505fd8c721347f309eef6d2c5dafe7';


  CexBtcUsd = 'https://cex.io/api/ticker/BTC/USD';
  CexBchUsd = 'https://cex.io/api/ticker/BCH/USD';
  CexEthUsd = 'https://cex.io/api/ticker/ETH/USD';

  ZebBtcInr = 'https://www.zebapi.com/api/v1/market/ticker/btc/inr';
  ZebBchInr = 'https://www.zebapi.com/api/v1/market/ticker/bch/inr';
  ZebEthInr = 'https://www.zebapi.com/api/v1/market/ticker/eth/inr';

  val: number;

  check;
  
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
