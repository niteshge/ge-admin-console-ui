import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './core/main/main.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './core/auth/auth-guard.service';
import { LoginAuthGuardService } from './core/auth/login-auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'infocus-report',
        loadChildren:
          './infocus-report/infocus-report.module#InfocusReportModule'
      },
      {
        path: 'master-tables',
        loadChildren:
          './master-tables/master-tables.module#MasterTablesModule'
      }
    ]
  },
  {
    path:'login',
    component: LoginComponent
    // canActivate: [LoginAuthGuardService],
  },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
