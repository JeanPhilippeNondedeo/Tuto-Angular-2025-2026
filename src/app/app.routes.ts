import { Routes } from '@angular/router';
import {Navigation} from "./navigation/navigation";
import {Page404} from "./page404/page404";
import {Accueil} from "./accueil/accueil";

export const routes: Routes = [
    { path: '', component: Accueil },
    { path: 'navigation', component: Navigation},
    { path: 'accueil', component: Accueil},
    { path: 'page404', component: Page404},
    { path: '**', redirectTo: 'page404'},
];
