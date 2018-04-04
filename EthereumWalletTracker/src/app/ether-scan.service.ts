import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EtherScanService {

  constructor(private http: HttpClient) { }

  getEtherWalletBalance(){
    //https://api.etherscan.io/api?module=account&action=balance&address=0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a&tag=latest&apikey=YourApiKeyToken
    const walletAddress = "0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a";
    const apiKey = "KSSCJHAMXR2QD95WGK17F11423E2H18CCS";
    const etherScanUrl = "https://api.etherscan.io/api?module=account&action=balance" 
                        + "&address=" + walletAddress 
                        + "&tag=latest"
                        + "&apikey=" + apiKey;
    return this.http.get(etherScanUrl);
  }

}
