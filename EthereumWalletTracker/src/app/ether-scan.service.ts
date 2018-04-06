import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class EtherScanService {

  constructor(private http: HttpClient) { }

  getEtherWalletBalance(walletAddress: string){
    //https://api.etherscan.io/api?module=account&action=balance&address=0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a&tag=latest&apikey=YourApiKeyToken
    //const walletAddress = "0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a";
    const apiKey = "KSSCJHAMXR2QD95WGK17F11423E2H18CCS";
    const etherScanUrl = "https://api.etherscan.io/api?module=account&action=balance" 
                        + "&address=" + walletAddress 
                        + "&tag=latest"
                        + "&apikey=" + apiKey;
                        console.log(walletAddress);
    return this.http.get(etherScanUrl);
  }

  getBalanceForEtherWallets(walletAddresses: string[]){
    //https://api.etherscan.io/api?module=account&action=balancemulti&address=0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a,0x63a9975ba31b0b9626b34300f7f627147df1f526,0x198ef1ec325a96cc354c7266a038be8b5c558f67&tag=latest&apikey=YourApiKeyToken
    //const walletAddress = "0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a";
    const apiKey = "KSSCJHAMXR2QD95WGK17F11423E2H18CCS";
    const etherScanUrl = "https://api.etherscan.io/api?module=account"
                        + "&action=balancemulti" 
                        + "&address=" + walletAddresses.toString() 
                        + "&tag=latest"
                        + "&apikey=" + apiKey;
    return this.http.get(etherScanUrl);
  }

}
