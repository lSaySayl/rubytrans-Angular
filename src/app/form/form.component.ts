import { Component } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  public formulario:FormGroup

  public constructor(public fabricaDatos:FormBuilder){
    this.formulario=this.inicializarFormulario()
  }


  public inicializarFormulario():FormGroup{
    return this.fabricaDatos.group({
      nombre:[''],
      descripcion:[''],
      fecha:[''],
      motivoDevolucion:[''],
      volumen:[''],
      zona:['']
    })
  }

  public capturarDatos():void{}

}
