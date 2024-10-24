import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AnimalListComponent } from './pages/animal-list/animal-list.component';
import { CreateAnimalComponent } from './pages/create-animal/create-animal.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'liste-animaux', component: AnimalListComponent },
  { path: 'creer-animal', component: CreateAnimalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
