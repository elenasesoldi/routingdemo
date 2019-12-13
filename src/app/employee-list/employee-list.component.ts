import { Component, OnInit } from '@angular/core';
import { Employee, EmployeesService } from '../employees.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  public employees: Employee[];

  constructor(private route: ActivatedRoute,
              private employeesService: EmployeesService) {
    this.employees = this.employeesService.getEmployees();
  }

  ngOnInit() {
  }

}
