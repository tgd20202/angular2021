import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { ButtonsCatalogComponent } from './components/buttons-catalog/buttons-catalog.component';
import { EditorComponent } from './components/editor/editor.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ResultSearchComponent } from './components/result-search/result-search.component';

const routes: Routes = [
 
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path:'resultados',
    component:ResultSearchComponent
  },
  {
    path:'editor',
    component:EditorComponent
  },
  {
    path:'admin',
    component:AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
