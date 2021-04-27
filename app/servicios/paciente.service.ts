import { Injectable } from '@angular/core';
import { GLOBAL } from './global';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private ohttp:HttpClient) {

  }

  getPacientes(idPac?){
    if (idPac){
      return this.ohttp.get(`${GLOBAL.urlPacientes}/${idPac}`);
    }
    else{
      return this.ohttp.get(GLOBAL.urlPacientes);
    }
  }

  guardarPaciente(paciente){
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    let parametros=JSON.stringify(paciente);
    return this.ohttp.post(GLOBAL.urlPacientes,paciente,{headers});
  }



  modificarPaciente(paciente,id){
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    let url=`${GLOBAL.urlPacientes}/${id}`;
    return this.ohttp.put(url,paciente,{headers});
  }

  eliminaPaciente(id){
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    let url=`${GLOBAL.urlPacientes}/${id}`;
    return this.ohttp.delete(url,{headers});
  }

}
