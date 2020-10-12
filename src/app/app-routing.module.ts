import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OutfitComponent } from './outfit/outfit.component';
import { HomeComponent } from './home/home.component';
import { InspoComponent } from './inspo/inspo.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'inspo',
    component: InspoComponent
  },
  {
    path: 'outfit/:outfitId',
    component: OutfitComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
