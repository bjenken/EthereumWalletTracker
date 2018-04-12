import { Token } from './token.data';
export class Wallet {
    name: string;
    ethBalance: number;
    address: string;
    tokens: Token[];

    constructor(name: string, address: string){
        this.name = name;
        this.address = address;
    }
}
