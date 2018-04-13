import { Token } from './token.data';
declare var blockies: any;
export class Wallet {
    name: string;
    ethBalance: number;
    address: string;
    tokens: Token[];
    icon: HTMLCanvasElement;
    iconUrl: string;

    constructor(name: string, address: string){
        this.name = name;
        this.address = address;
        this.icon = blockies.create({ 
            seed: this.address,
            size: 8,
            scale: 16 
        })
        this.iconUrl = this.icon.toDataURL();

    }
}
