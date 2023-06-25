import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClientDataModel } from 'src/app/model/client.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-pregunta3',
  templateUrl: './pregunta3.component.html',
  styleUrls: ['./pregunta3.component.css'],
})
export class Pregunta3Component implements AfterViewInit, OnInit {
  displayedColumns: string[] = [
    'client_id',
    'nombres',
    'apellidos',
    'edad',
    'dni',
    'telefono',
  ];
  dataSource: MatTableDataSource<ClientDataModel>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  clientList: ClientDataModel[] = [];

  constructor(private snackBar: MatSnackBar, private apiService: ApiService) {
    this.dataSource = new MatTableDataSource<ClientDataModel>([]);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    // Obtén los datos de tu API o cualquier otra fuente de datos
    this.getClients();
  }

  getClients() {
    this.apiService.listAll().subscribe({
      next: (response: ClientDataModel[]) => {
        this.clientList = response;
        this.dataSource.data = this.clientList;
      },
    });
  }
}
