import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
	{ path: '', component: LandingComponent },
	{ path: 'sign-in', component: LoginComponent },
	{ path: 'sign-up', component: RegisterComponent },
];
