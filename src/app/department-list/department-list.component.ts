import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DepartmentsService, Department } from '../departments.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {

  public departments: Department[];
  public selectedId: number;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private departmentsService: DepartmentsService) {
    this.departments = this.departmentsService.getDepartments();
  }

  public ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.selectedId = parseInt(params.get('id'), 10);
    });
  }

  public onSelect(department: {id: number, name: string}): void {
    const selected = document.getElementById('dep' + department.id);
    const badge = selected.children[0] as HTMLElement;
    const div = selected.children[1] as HTMLElement;

    badge.style.backgroundColor = '#b03f8e';
    badge.style.boxShadow = 'inset 0 0 5px #ff0090';
    div.style.background = '#fbf3f9';
    div.style.boxShadow = 'inset 0 0 5px #b03f8e';

    setTimeout(() => {
      badge.style.backgroundColor = '#3f8fbf';
      badge.style.boxShadow = 'inset 0 0 5px #1da1f2';
      div.style.background = '#f3f6f7';
      div.style.boxShadow = 'inset 0 0 5px #607d8b';
      // this.router.navigate(['/department-list', department.id]);
      this.router.navigate([department.id], {relativeTo: this.route});
    }, 500);
  }

  public isSelected(department: {id: number, name: string}): boolean {
    return department.id === this.selectedId;
  }

}
