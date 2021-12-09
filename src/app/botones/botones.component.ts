import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent {

  ciudades:string[] =[];
  listaBorrada:any = "";

  mostrarCiudades(){
    this.ciudades=["Cáceres", "Madrid", "Barcelona", "Sevilla", "Malaga", "Lerida"];
  }

  borrarListCiudades(){
    this.listaBorrada = this.ciudades.splice(0, this.ciudades.length);
  }
}
