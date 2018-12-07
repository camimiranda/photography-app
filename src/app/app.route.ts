import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
    { path: '', redirectTo:'/home', component: UserLoginFormComponent, pathMatch: 'full'},
    { path: '/home', component: UserLoginFormComponent}
]

export const AppRouter = RouterModule.forRoot(route);