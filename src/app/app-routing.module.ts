import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import(`./feature-modules/login/login.module`).then(
        (module) => module.LoginModule
      ),
  },
  {
    path: 'employees',
    loadChildren: () =>
      import(`./feature-modules/employees/employees.module`).then(
        (module) => module.EmployeesModule
      ),
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: 'employees' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
