import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AjoutComponent} from './components/ajout/ajout.component';
import {ModificationComponent} from './components/modification/modification.component';
import {DetailComponent} from './components/detail/detail.component';
import {ListeComponent} from './components/liste/liste.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'liste', component: ListeComponent},
  {path: 'ajout/add', component: AjoutComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: 'edit/update/:id', component: ModificationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
