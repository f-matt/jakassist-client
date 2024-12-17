import {MatTableDataSource} from '@angular/material/table';

export class DataSourceWrapper<Type> {

  data: Type[];
  dataSource: MatTableDataSource<Type>;
  displayedColumns: string[];
  pageIndex: number;
  pageSize: number;
  length: number;
  pageSizeOptions: number[];

  constructor(data: Type[], displayedColumns: string[], pageSizeOptions: number[]) {
    this.data = data;
    this.dataSource = new MatTableDataSource<Type>(this.data);
    this.displayedColumns = displayedColumns;
    this.pageSizeOptions = pageSizeOptions;
    this.pageIndex = 0;
    this.pageSize = this.pageSizeOptions[0] ? this.pageSizeOptions[0] : 1;
    this.length = this.data.length;
  }

  update(data: Type[]): void {
    this.data = data;
    this.dataSource = new MatTableDataSource<Type>(this.data);
    this.pageIndex = 0;
    this.pageSize = this.pageSizeOptions[0] ? this.pageSizeOptions[0] : 1;
    this.length = this.data.length;
  }

}
