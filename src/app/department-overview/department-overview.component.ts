import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Department, DepartmentsService } from '../departments.service';

@Component({
  selector: 'app-department-overview',
  templateUrl: './department-overview.component.html',
  styleUrls: ['./department-overview.component.scss']
})
export class DepartmentOverviewComponent implements OnInit {

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
