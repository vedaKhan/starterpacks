import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OutfitComponent } from './outfit/outfit.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'outfit',
    component: OutfitComponent
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
