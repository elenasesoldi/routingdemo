import { Component, OnInit } from '@angular/core';
import { Department, DepartmentsService } from '../departments.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-contact',
  templateUrl: './department-contact.component.html',
  styleUrls: ['./department-contact.component.scss']
})
export class DepartmentContactComponent implements OnInit {

  public departmentId: number;
  public department: Department;

  constructor(private route: ActivatedRoute,
              private departmentsService: DepartmentsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.departmentId = params.get('id') ? parseInt(params.get('id'), 10) : this.departmentId;
      this.department = this.departmentsService.getDepartment(this.departmentId);
    });
  }

}
