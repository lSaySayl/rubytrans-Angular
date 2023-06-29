import { Component } from '@angular/core';
import { Merchandise } from '../interfaces/Merchandise';
import { MercanciaService } from '../services/mercancia.service';

@Component({
  selector: 'app-merchandise',
  templateUrl: './merchandise.component.html',
  styleUrls: ['./merchandise.component.css']
})
export class MerchandiseComponent {
  public mercancias:Merchandise[]=[]

  public constructor (public peticion:MercanciaService){
    this.peticion.buscarMercancias()
    .subscribe((respuesta)=>{
    console.log(respuesta)
    this.mercancias = respuesta
    })
  }

}
