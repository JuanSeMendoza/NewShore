import { Transport } from "./Transport";

export class Flight {
    
    constructor(
        public transport: Transport,
        public origin:   string,
        public flightCarrier:    string,
        public flightNumber:     string,
        public price:            number,) {
        
    }
}
