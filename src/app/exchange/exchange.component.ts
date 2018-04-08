import { async } from '@angular/core/testing';
import { HttpModule, Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/observable/combineLatest';


@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent {
  UsdToInr: number;

  CexBtcUsd: number;
  CexBchUsd: number;
  CexEthUsd: number;

  _CexBtcUsd: number;
  _CexBchUsd: number;
  _CexEthUsd: number;

  CexBtcInr: number;
  CexBchInr: number;
  CexEthInr: number;

  _CexBtcInr: number;
  _CexBchInr: number;
  _CexEthInr: number;

  ZebBtcInr: number;
  ZebBchInr: number;
  ZebEthInr: number;

  ZebBtcUsd: number;
  ZebBchUsd: number;
  ZebEthUsd: number;

  BtcDiff: number;
  BchDiff: number;
  EthDiff: number;

  BtcDiffPer: number;
  BchDiffPer: number;
  EthDiffPer: number;

  pro = 'green';
  warn = 'red';
  val: number;
  ans: number;
  customRate: number;

  btcimg = 'https://i.imgur.com/67R21dX.png';
  bchimg = 'https://files.startupranking.com/startup/thumb/15101_78f3f21941779ac5e1fcfe3546833ee2efaad45a_bitcash_m.png';
  ethimg = 'https://www.ethereum-price.com/img/ETH.svg';

  constructor(private fetchService: FetchService, http: Http) { 

    fetchService.getObservable().subscribe(res => {

      this.UsdToInr  = parseFloat(res[0]);     
      this.CexBtcUsd = parseFloat(res[1]);
      this.CexBchUsd = parseFloat(res[2]);
      this.CexEthUsd = parseFloat(res[3]);
      this.ZebBtcInr = parseFloat(res[4]);
      this.ZebBchInr = parseFloat(res[5]);
      this.ZebEthInr = parseFloat(res[6]);

      this.CexBtcInr = this.CexBtcUsd * this.UsdToInr;
      this.CexBchInr = this.CexBchUsd * this.UsdToInr;
      this.CexEthInr = this.CexEthUsd * this.UsdToInr;

      this._CexBtcUsd = this.CexBtcUsd + this.CexBtcUsd * 0.04;
      this._CexBchUsd = this.CexBchUsd + this.CexBchUsd * 0.04;
      this._CexEthUsd = this.CexEthUsd + this.CexEthUsd * 0.04;

      this._CexBtcInr = (this.CexBtcUsd + this.CexBtcUsd * 0.04) * this.UsdToInr;
      this._CexBchInr = (this.CexBchUsd + this.CexBchUsd * 0.04) * this.UsdToInr;
      this._CexEthInr = (this.CexEthUsd + this.CexEthUsd * 0.04) * this.UsdToInr;

      this.ZebBtcUsd = this.ZebBtcInr / this.UsdToInr;
      this.ZebBchUsd = this.ZebBchInr / this.UsdToInr;
      this.ZebEthUsd = this.ZebEthInr / this.UsdToInr;

      this.BtcDiff = Math.abs(this.ZebBtcInr - this.CexBtcInr);
      this.BchDiff = Math.abs(this.ZebBchInr - this.CexBchInr);
      this.EthDiff = Math.abs(this.ZebEthInr - this.CexEthInr);

      this.BtcDiffPer = this.BtcDiff * 100 / this.CexBtcInr;
      this.BchDiffPer = this.BchDiff * 100 / this.CexBchInr;
      this.EthDiffPer = this.EthDiff * 100 / this.CexEthInr;
  
    });
  }

  onKeyUp(param) {

    if(param == 'reload') {
      this.UsdToInr = null;
    }

    this.fetchService.getObservable().subscribe(res => {

      if(this.UsdToInr == null) {
        this.UsdToInr  = parseFloat(res[0]); 
      }
      this.CexBtcUsd = parseFloat(res[1]);
      this.CexBchUsd = parseFloat(res[2]);
      this.CexEthUsd = parseFloat(res[3]);
      this.ZebBtcInr = parseFloat(res[4]);
      this.ZebBchInr = parseFloat(res[5]);
      this.ZebEthInr = parseFloat(res[6]);

      this.CexBtcInr = this.CexBtcUsd * this.UsdToInr;
      this.CexBchInr = this.CexBchUsd * this.UsdToInr;
      this.CexEthInr = this.CexEthUsd * this.UsdToInr;

      this._CexBtcUsd = this.CexBtcUsd + this.CexBtcUsd * 0.04;
      this._CexBchUsd = this.CexBchUsd + this.CexBchUsd * 0.04;
      this._CexEthUsd = this.CexEthUsd + this.CexEthUsd * 0.04;

      this._CexBtcInr = (this.CexBtcUsd + this.CexBtcUsd * 0.04) * this.UsdToInr;
      this._CexBchInr = (this.CexBchUsd + this.CexBchUsd * 0.04) * this.UsdToInr;
      this._CexEthInr = (this.CexEthUsd + this.CexEthUsd * 0.04) * this.UsdToInr;

      this.ZebBtcUsd = this.ZebBtcInr / this.UsdToInr;
      this.ZebBchUsd = this.ZebBchInr / this.UsdToInr;
      this.ZebEthUsd = this.ZebEthInr / this.UsdToInr;

      this.BtcDiff = Math.abs(this.ZebBtcInr - this.CexBtcInr);
      this.BchDiff = Math.abs(this.ZebBchInr - this.CexBchInr);
      this.EthDiff = Math.abs(this.ZebEthInr - this.CexEthInr);

      this.BtcDiffPer = this.BtcDiff * 100 / this.CexBtcInr;
      this.BchDiffPer = this.BchDiff * 100 / this.CexBchInr;
      this.EthDiffPer = this.EthDiff * 100 / this.CexEthInr;
  
    });
  }
}
