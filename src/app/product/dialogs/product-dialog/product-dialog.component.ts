import { Component, OnInit, Inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Update } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { Product } from '@shared/models';
import { AppState } from 'src/app/app.reducer';
import { productActionTypes } from '../../store/product.actions';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss']
})
export class ProductDialogComponent implements OnInit {

  productForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<ProductDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, private store: Store<AppState>) {
    this.productForm = this.fb.group({
      id: ["", [Validators.required, Validators.pattern("^[0-9]{0,}$")]],
      codigo: ["", [Validators.required]],
      estado: ["", [Validators.required]],
      precio: ["", [Validators.required]],
      producto: ["", [Validators.required, Validators.pattern('([A-z]*\\s)*')]],
      // producto: ["", [Validators.required, Validators.pattern('^[a-zA-Z\s]+{2,254}')]],
      descripcion: ["", [Validators.required]],
      idCategoria: ["", [Validators.required]]
    })
  }

  ngOnInit(): void {
    if (!this.data.isNew) {
      this.productForm.setValue(this.data.product);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  get id(): AbstractControl | null {
    return this.productForm.get('id');
  }
  get codigo(): AbstractControl | null {
    return this.productForm.get('codigo');
  }
  get estado(): AbstractControl | null {
    return this.productForm.get('estado');
  }
  get precio(): AbstractControl | null {
    return this.productForm.get('precio');
  }
  get producto(): AbstractControl | null {
    return this.productForm.get('producto');
  }
  get descripcion(): AbstractControl | null {
    return this.productForm.get('descripcion');
  }
  get idCategoria(): AbstractControl | null {
    return this.productForm.get('idCategoria');
  }

  submitForm() {
    if (this.data.isNew) {
      const product: Product = {
        id: this.id?.value,
        codigo: this.codigo?.value,
        estado: this.estado?.value,
        precio: this.precio?.value,
        producto: this.producto?.value,
        descripcion: this.descripcion?.value,
        idCategoria: this.idCategoria?.value
      };
      this.store.dispatch(productActionTypes.createProduct({ product }));
      this.onNoClick();
    } else {
      const update: Update<Product> = {
        id: this.id?.value,
        changes: {
          ...this.data.product,
          ...this.productForm.value
        }
      };
      this.store.dispatch(productActionTypes.updateProduct({ update }));
      this.onNoClick();
    }
  }

  handleProductDelete() {
    this.store.dispatch(productActionTypes.deleteProduct({ productId: this.id?.value }));
    this.onNoClick();
  }

}
