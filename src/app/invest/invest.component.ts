import { Http } from '@angular/http';
import { FetchService } from './../fetch.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invest',
  templateUrl: './invest.component.html',
  styleUrls: ['./invest.component.css']
})
export class InvestComponent {
  value: number;
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

  pro;
  warn;
  align = "align";

  constructor(fetchService: FetchService, http: Http) {

    fetchService.getUsdToInr().subscribe(UsdToInr=>{
      this.UsdToInr = parseFloat(UsdToInr);
    });

    fetchService.getCexBtcUsd().subscribe(CexBtcUsd => {
      this.CexBtcUsd = parseFloat(CexBtcUsd); 
      this._CexBtcUsd = this.CexBtcUsd;
      this.CexBtcUsd = this.CexBtcUsd + this.CexBtcUsd*0.04; 
      this._CexBtcInr = fetchService.convertUsdToInr(this._CexBtcUsd, this.UsdToInr);
      this.CexBtcInr = fetchService.convertUsdToInr(this.CexBtcUsd, this.UsdToInr);
    });

    fetchService.getCexBchUsd().subscribe(CexBchUsd => {
      this.CexBchUsd = parseFloat(CexBchUsd);
      this._CexBchUsd = this.CexBchUsd;
      this.CexBchUsd = this.CexBchUsd + this.CexBchUsd*0.04;
      this._CexBchInr = fetchService.convertUsdToInr(this._CexBchUsd, this.UsdToInr);
      this.CexBchInr = fetchService.convertUsdToInr(this.CexBchUsd, this.UsdToInr);
    });

    fetchService.getCexEthUsd().subscribe(CexEthUsd => {
      this.CexEthUsd = parseFloat(CexEthUsd);
      this._CexEthUsd = this.CexEthUsd;
      this.CexEthUsd = this.CexEthUsd + this.CexEthUsd*0.04;
      this._CexEthInr = fetchService.convertUsdToInr(this._CexEthUsd, this.UsdToInr);
      this.CexEthInr = fetchService.convertUsdToInr(this.CexEthUsd, this.UsdToInr);
    });

    fetchService.getZebBtcInr().subscribe(ZebBtcInr => {
      this.ZebBtcInr = parseFloat(ZebBtcInr);
      this.ZebBtcUsd = fetchService.convertInrToUsd(this.ZebBtcInr, this.UsdToInr);
    });

    fetchService.getZebBchInr().subscribe(ZebBchInr => {
      this.ZebBchInr = parseFloat(ZebBchInr);
      this.ZebBchUsd = fetchService.convertInrToUsd(this.ZebBchInr, this.UsdToInr);
    });

    fetchService.getZebEthInr().subscribe(ZebEthInr => {
      this.ZebEthInr = parseFloat(ZebEthInr);
      this.ZebEthUsd = fetchService.convertInrToUsd(this.ZebEthInr, this.UsdToInr);
    });
   
    this.pro = 'green';
    this.warn = 'red';
   }

  save(info) {
    this.value = parseFloat(info.val);
  }


}
