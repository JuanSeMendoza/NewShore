export interface Welcome {
    departureStation: string;
    arrivalStation:   string;
    flightCarrier:    FlightCarrier;
    flightNumber:     string;
    price:            number;
}

enum FlightCarrier {
    Co = "CO",
    Es = "ES",
    MX = "MX",
}
