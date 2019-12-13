import { Injectable } from '@angular/core';

export interface Employee {
  id: number;
  name: string;
  age: number;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private employees: Employee[];

  constructor() {
    this.employees = [
      {id: 1, name: 'Walter', age: 29},
      {id: 2, name: 'Luca', age: 30},
      {id: 3, name: 'Elena', age: 25},
    ];
  }

  public getEmployees(): Employee[] {
    return this.employees;
  }
}
