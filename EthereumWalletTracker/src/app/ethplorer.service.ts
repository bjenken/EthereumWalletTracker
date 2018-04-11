import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EthplorerService {

  constructor(private http: HttpClient) { }

  getEtherWalletBalance(walletAddress: string){
    ///https://api.ethplorer.io/getAddressInfo/0xff71cb760666ab06aa73f34995b42dd4b85ea07b?apiKey=freekey
    //const walletAddress = "0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a";
    const apiKey = "freekey";
    const ethplorerUrl = "https://api.ethplorer.io/getAddressInfo/" 
                        + walletAddress 
                        + "?apiKey=" + apiKey;
    return this.http.get(ethplorerUrl);
  }

}
