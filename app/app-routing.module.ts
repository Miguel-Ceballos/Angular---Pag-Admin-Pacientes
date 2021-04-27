import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditapacientesComponent } from './componentes/editapacientes/editapacientes.component';
import { ListaPacientesComponent } from './componentes/lista-pacientes/lista-pacientes.component';
import { PacientesComponent } from './componentes/pacientes/pacientes.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

const routes: Routes = [
  {path:'inicio',component:InicioComponent},
  {path:'listapacientes',component:ListaPacientesComponent},
  {path:'editapacientes/:id',component:EditapacientesComponent},
  {path:'registrapacientes',component:PacientesComponent},
  {path:'**',pathMatch:'full',redirectTo:'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
