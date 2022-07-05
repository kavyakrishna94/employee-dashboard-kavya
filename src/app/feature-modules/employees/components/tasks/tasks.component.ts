import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employees.service';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../../../../shared/interfaces/task';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faArrowLeft, faListCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  constructor(
    private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal
  ) {
    // Updates the tasks list after adding a new task
    this.employeeService.addTaskListner().subscribe((response) => {
      if (response.task) {
        let newTask: Task = {};
        newTask.userId = this.activatedRoute.snapshot.params['employeeId'];
        newTask.title = response.task;
        newTask.completed = false;
        this.taskData.unshift(newTask);
        this.gridApi.setRowData(this.taskData);
      }
    });
  }
  backIcon = faArrowLeft;
  taskIcon = faListCheck;
  taskData: Array<Task>;
  private gridApi;
  ngOnInit() {
    let employeeId = this.activatedRoute.snapshot.params['employeeId'];
    this.getEmployeeTasks(employeeId);
  }

  // Fetches all the tasks for an employee
  // param - employee id
  getEmployeeTasks(empId: Number) {
    this.employeeService.getEmployeeTasks(empId).subscribe((respose) => {
      this.taskData = respose;
    });
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
  }

  columnDefs = [
    {
      field: 'title',
      width: 200,
      sortable: true,
      unSortIcon: true,
      filter: true,
      headerName: 'Description',
    },
    {
      field: 'completed',
      sortable: true,
      unSortIcon: true,
      valueFormatter: this.statusFormatter,
      headerName: 'Status',
      filter: 'agSetColumnFilter',
    },
  ];

  // opens the modal pop up for task adding.
  // param modal id
  public openAddTask(modal: any): void {
    this.modalService.open(modal);
  }

  statusFormatter(params) {
    return params.data?.completed == true ? 'Completed' : 'Not Completed';
  }
}
