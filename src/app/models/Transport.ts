export class Transport{

    static Transporte(obj: any){
        return new Transport(
            obj['flightCarrier'],
            obj['flightNumer'],
        );
    }
    
    constructor(
        public flightCarrier: string ,
        public flightNumer: string,
    ) {
        
    }

    get sum(){
        return `${this.flightCarrier} ${this.flightNumer}`
    }
    
}