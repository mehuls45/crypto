import { Http } from '@angular/http';
import { FetchService } from './../fetch.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-invest',
  templateUrl: './invest.component.html',
  styleUrls: ['./invest.component.css']
})
export class InvestComponent {

  @Input() UsdToInr: number;

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

  val: number;
  ValUsd: number;
  BtcCrypto: number;
  BchCrypto: number;
  EthCrypto: number;
  ZebBtcCryptoUsd: number;
  ZebBchCryptoUsd: number;
  ZebEthCryptoUsd: number;
  ZebBtcCryptoInr: number;
  ZebBchCryptoInr: number;
  ZebEthCryptoInr: number;
  BtcCryptoDiff: number;
  BchCryptoDiff: number;
  EthCryptoDiff: number;
  BtcCryptoDiffPer: number;
  BchCryptoDiffPer: number;
  EthCryptoDiffPer: number;

  pro = 'green';
  warn = 'red';
  align = "align";

  constructor(private fetchService: FetchService, http: Http) { }

  save(info) {
    this.val = parseFloat(info.value);

    this.fetchService.getObservable().subscribe(res => {
      //this.UsdToInr = parseFloat(res[0]); Value taken as an input parameter
      this.CexBtcUsd = parseFloat(res[1]);
      this.CexBchUsd = parseFloat(res[2]);
      this.CexEthUsd = parseFloat(res[3]);
      this.ZebBtcInr = parseFloat(res[4]);
      this.ZebBchInr = parseFloat(res[5]);
      this.ZebEthInr = parseFloat(res[6]);

      this.ValUsd = this.val / this.UsdToInr;

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


      this.BtcCrypto = this.val/this._CexBtcInr;
      this.BchCrypto = this.val/this._CexBchInr;
      this.EthCrypto = this.val/this._CexEthInr;

      this.ZebBtcCryptoUsd = this.BtcCrypto * this.ZebBtcUsd;
      this.ZebBchCryptoUsd = this.BchCrypto * this.ZebBchUsd;
      this.ZebEthCryptoUsd = this.EthCrypto * this.ZebEthUsd;

      this.ZebBtcCryptoInr = this.ZebBtcCryptoUsd * this.UsdToInr;
      this.ZebBchCryptoInr = this.ZebBchCryptoUsd * this.UsdToInr;
      this.ZebEthCryptoInr = this.ZebEthCryptoUsd * this.UsdToInr;

      this.BtcCryptoDiff = Math.abs(this.ZebBtcCryptoInr - this.val);
      this.BchCryptoDiff = Math.abs(this.ZebBchCryptoInr - this.val);
      this.EthCryptoDiff = Math.abs(this.ZebEthCryptoInr - this.val);

      this.BtcCryptoDiffPer = this.BtcCryptoDiff * 100 / this.val;
      this.BchCryptoDiffPer = this.BchCryptoDiff * 100 / this.val;
      this.EthCryptoDiffPer = this.EthCryptoDiff * 100 / this.val;
  
    });
  }

}
