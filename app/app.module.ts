import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PieComponent } from './componentes/pie/pie.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PacientesComponent } from './componentes/pacientes/pacientes.component';
import { EditapacientesComponent } from './componentes/editapacientes/editapacientes.component';
import { ListaPacientesComponent } from './componentes/lista-pacientes/lista-pacientes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PieComponent,
    InicioComponent,
    PacientesComponent,
    EditapacientesComponent,
    ListaPacientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
