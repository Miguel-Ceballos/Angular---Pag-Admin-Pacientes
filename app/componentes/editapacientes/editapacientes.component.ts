import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/servicios/paciente.service';
import { Paciente } from '../../modelos/paciente';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editapacientes',
  templateUrl: './editapacientes.component.html',
  styles: [
  ]
})
export class EditapacientesComponent implements OnInit {
  public paciente:Paciente;
  id:String;
  constructor(
    private obSerPac:PacienteService,
    private router:Router,
    private aRoute:ActivatedRoute
  ) {
    this.paciente = new Paciente('','','','','','','');
    this.aRoute.params.subscribe(parametros=>this.id=parametros['id'])
   }

  ngOnInit(): void {

    this.obSerPac.getPacientes(this.id).subscribe((datos:Paciente)=>{
      this.paciente=datos;
    });
  }

  modificarPaciente(){
    this.obSerPac.modificarPaciente(this.paciente,this.id).subscribe(info=>{
      alert('Se modificó el paciente');
      this.router.navigate(['listapacientes']);

    });
  }

}
