import { Component, OnInit } from '@angular/core';
import { FlightsService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.css']
})
export class RespuestaComponent implements OnInit {
  public vuelos: any = [];
  constructor( private flightsService: FlightsService){

  }
  ngOnInit(): void {
    this.flightsService.ObtenerVuelos()
        .subscribe( Flight => {
          this.vuelos = Flight;
          console.log(Flight)

        })
  }
}
