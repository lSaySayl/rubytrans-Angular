import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MercanciaService {

  constructor(public servicio:HttpClient) { }

  registrarMercancias(){}
  public buscarMercancias():Observable<any>{
    let url= "http://localhost:8080/grupoLCH_SA/mercancias/"
    return this.servicio.get(url)

  }


}
