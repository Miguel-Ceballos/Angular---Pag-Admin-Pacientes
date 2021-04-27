import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/servicios/paciente.service';
import { Paciente } from '../../modelos/paciente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.css'],
})
export class ListaPacientesComponent implements OnInit {
  listaPacientes:Paciente[];
  objPaciente:any;

  constructor(
    private obSerPac:PacienteService,
    private _router:Router
  ) { }

  ngOnInit(): void {
    this.obSerPac.getPacientes().subscribe((info:Paciente[])=>{
      this.listaPacientes=info;
    });
  }

  registraPaciente(){
    this._router.navigate(['registrapacientes']);
  }

  eliminaPacienteArreglo(idPac){
    for (let k=0;k<this.listaPacientes.length;k++){
      this.objPaciente=this.listaPacientes[k];
      if (this.objPaciente._id==idPac){
        this.listaPacientes.splice(k,1);
      }
    }
  }

  eliminarPaciente(id){
    if (confirm('Desea eliminar el registro con clave ' + id)){
      this.obSerPac.eliminaPaciente(id).subscribe();
      this.eliminaPacienteArreglo(id);
      alert('Registro eliminado.');
    }
  }

}
