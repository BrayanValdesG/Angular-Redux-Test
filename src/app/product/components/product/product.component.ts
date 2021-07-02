import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '@shared/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() products$: Observable<Product[]> | undefined;
  @Input() displayedColumns: string[] = [];
  @Output() openDialog = new EventEmitter();


  constructor() {

  }

  ngOnInit(): void {
  }

  executeDialog(product?: Product) {
    this.openDialog.emit(product ? product : null);
  }

}
