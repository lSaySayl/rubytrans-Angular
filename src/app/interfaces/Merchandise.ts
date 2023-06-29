import { Zone } from "./Zone";

export interface Merchandise {
  id: number;
  nombre: string;
  descripcion: string;
  fechaEntradaBodega: string;
  motivoDevolucion: string;
  volumen: number;
  zona: Zone

}
