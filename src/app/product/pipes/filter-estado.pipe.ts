import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '@shared/models';

@Pipe({
  name: 'filterEstado'
})
export class FilterEstadoPipe implements PipeTransform {

  transform(products: Product[], filtro: string): Product[] {
    switch (filtro) {
      case 'Activo':
        return products.filter((product) => product.estado === true)
      case 'Inactivo':
        return products.filter((product) => product.estado === false)
      default:
        return products;
    }
  }

}
