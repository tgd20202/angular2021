import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './components/home-page/home-page.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MaterialImports } from './materia-imports';
import { ButtonsCatalogComponent } from './components/buttons-catalog/buttons-catalog.component';
import { ResultSearchComponent } from './components/result-search/result-search.component';
import { EditorComponent } from './components/editor/editor.component';
import { DialogCreateComponent } from './components/dialog-create/dialog-create.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserManualComponent } from './components/user-manual/user-manual.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ButtonsCatalogComponent,
    ResultSearchComponent,
    EditorComponent,
    DialogCreateComponent,
    AdminComponent,
    UserManualComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialImports,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents:[DialogCreateComponent],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
