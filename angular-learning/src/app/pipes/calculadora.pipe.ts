import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  // nombre del pipe
  name: 'calculadora'
})
// exportar la clase
export class CalculadoraPipe implements PipeTransform {
  
  // dato | calculadora: otroDato
  // param1              param2 
  transform(value: any, value_two: any) {
    let operaciones = `
      Suma: ${value + value_two} -
      Resta: ${value - value_two} -
      Multiplicacion: ${value * value_two} -
      División: ${value / value_two} 
    `;

    return operaciones;
  }

}
