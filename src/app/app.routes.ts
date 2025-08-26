import { Routes } from '@angular/router';
import { ResultComponent } from './result/result.component';
import { ResultTwoComponent } from './result-two/result-two.component';

export const routes: Routes = [
    { path: '', redirectTo: "mainForm", pathMatch: 'full' },
    { path: 'events', component: ResultComponent, outlet: 'events' },
    { path: 'weather', component: ResultTwoComponent, outlet: 'weather' }
];
