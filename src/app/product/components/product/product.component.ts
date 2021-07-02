import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '@shared/models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  @Input() products: Product[] | any;
  @Input() displayedColumns: string[] = [];
  dataSource: MatTableDataSource<Product>;


  constructor() {
    this.products = [];
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.products);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
