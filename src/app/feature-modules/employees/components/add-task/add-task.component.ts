import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employees.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  constructor(
    private employeeService: EmployeeService,
    private modalService: NgbModal
  ) {}

  newTaskForm = new FormGroup({
    taskDesc: new FormControl('', [Validators.required]),
  });

  ngOnInit() {}

  submitDesc() {
    this.employeeService.addTaskEmitter(this.newTaskForm.value.taskDesc);
    this.modalService.dismissAll();
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  ngOnDestroy() {}
}
