import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './private/login/login.component';
import { MarcadoComponent } from './private/marcado/marcado.component';
import { RegistroComponent } from './private/registro/registro.component';
import { PerfilComponent } from './private/perfil/perfil.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MarcadoComponent,
    RegistroComponent,
    PerfilComponent,
    ReactiveFormsModule
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
