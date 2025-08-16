import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ResultComponent } from './result/result.component';

export const routes: Routes = [
    { path: '', redirectTo: '/form', pathMatch: 'full'},
    { path: 'form', component: FormComponent},
    { path: 'result', component: ResultComponent}
];
