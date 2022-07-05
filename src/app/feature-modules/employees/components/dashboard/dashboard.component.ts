import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employees.service';
import { Router } from '@angular/router';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}
  employeesIcon = faUsers;
  employeesData = [];
  private gridApi;
  ngOnInit() {
    this.employeeService.getEmployeeData().subscribe((response) => {
      console.log(response);
      this.employeesData = response;
    });
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
  }

  columnDefs = [
    {
      field: 'name',
      sortable: true,
      unSortIcon: true,
      filter: 'agTextColumnFilter',
      cellStyle: { color: '#6789e9' },
    },
    { field: 'phone', filter: true },
    { field: 'email', filter: true },
    {
      field: 'username',
      sortable: true,
      unSortIcon: true,
      filter: 'agTextColumnFilter',
    },
    { field: 'website', filter: true },
  ];

  onCellClicked(event) {
    if (event?.colDef.field == 'name') {
      this.router.navigate(['/employees/tasks/' + event.data.id]);
    }
  }
}
