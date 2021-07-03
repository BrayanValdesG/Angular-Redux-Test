import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '@shared/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() products$: Observable<Product[]> | undefined;
  @Input() displayedColumns: string[] = [];
  @Output() openDialog = new EventEmitter();

  executeDialog(product?: Product) {
    this.openDialog.emit(product ? product : null);
  }

}
