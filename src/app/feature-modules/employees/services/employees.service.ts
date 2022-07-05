import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Employee } from '../../../shared/interfaces/employee';
import { Task } from '../../../shared/interfaces/task';
import { Observable, Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  private subject = new Subject<any>();

  public getEmployeeData() {
    return this.http.get<Employee[]>(environment.API_HOST + 'users');
  }

  public getEmployeeTasks(empId: Number) {
    return this.http.get<Task[]>(
      environment.API_HOST + 'users/' + empId + '/todos'
    );
  }

  public addTaskEmitter(taskDesc: string) {
    this.subject.next({ task: taskDesc });
  }

  public addTaskListner(): Observable<any> {
    return this.subject.asObservable();
  }
}
