import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Department, DepartmentsService } from '../departments.service';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.scss']
})
export class DepartmentDetailsComponent implements OnInit {

  public department: Department;
  public departmentId: number;
  public max: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private departmentsService: DepartmentsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.departmentId = params.get('id') ? parseInt(params.get('id'), 10) : this.departmentId;
      this.department = this.departmentsService.getDepartment(this.departmentId);
      this.max = this.departmentsService.getDepartments().length;
    });
  }

  public goPrevious(): void {
    this.deselectNavLink();
    const previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId]);
  }

  public goNext(): void {
    this.deselectNavLink();
    const nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }

  public goBack(): void {
    const selectedId = this.departmentId ? this.departmentId : null;
    // this.router.navigate(['/departments', {id: selectedId, test: 'testvalue'}]);
    this.router.navigate(['../', {id: selectedId, test: 'testvalue'}]);
  }

  public show(uri: string, event: MouseEvent): void {
    this.deselectNavLink();
    const a = event.target as HTMLElement;
    a.classList.add('active');
    this.router.navigate([uri, {id: this.departmentId}], {relativeTo: this.route});
  }

  private deselectNavLink(): void {
    const nav = document.getElementById('items-nav');
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < nav.children.length; i++) {
      const n = nav.children[i] as HTMLElement;
      n.classList.remove('active');
    }
  }

}
