import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/servicios/paciente.service';
import { Paciente } from '../../modelos/paciente'
import { Router } from '@angular/router';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styles: [
  ]
})
export class PacientesComponent implements OnInit {
  public paciente:Paciente;
  constructor(private router:Router,private obSerPac:PacienteService) {
    this.paciente = new Paciente('','','','','','','');
  }

ngOnInit(): void {
}

regresar(){
this.router.navigate(['listapacientes']);
}

registrarPaciente(){
  this.obSerPac.guardarPaciente(this.paciente).subscribe(info=>{
    alert('Se registro el paciente');
    this.paciente = new Paciente('','','','','','','');
    });
  }

}
