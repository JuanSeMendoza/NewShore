import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Flight, Transport } from '../models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  constructor( private http: HttpClient ) {  }

  ObtenerVuelos(){
    const url = 'https://recruiting-api.newshore.es/api/flights/2';

    return this.http.get<Flight>( url )
          .pipe(
            map( resp =>{
              return resp
            })
          )
  }
}
