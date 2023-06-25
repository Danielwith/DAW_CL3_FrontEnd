import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { productoModel } from 'src/app/model/producto.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-pregunta4',
  templateUrl: './pregunta4.component.html',
  styleUrls: ['./pregunta4.component.css']
})
export class Pregunta4Component implements AfterViewInit, OnInit {
  displayedColumns: string[] = [
    'id',
    'producto',
    'precio',
    'descripcion',
    'stock',
  ];
  dataSource: MatTableDataSource<productoModel>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  listaProductos: productoModel[] = [];

  constructor(private apiService: ApiService) {
    this.dataSource = new MatTableDataSource<productoModel>([]);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.apiService.listarProductos().subscribe({
      next: (response: productoModel[]) => {
        this.listaProductos = response;
        this.dataSource.data = this.listaProductos;
      },
    });
  }
}
