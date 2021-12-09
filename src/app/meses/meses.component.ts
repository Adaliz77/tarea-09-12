import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meses',
  templateUrl: './meses.component.html',
  styleUrls: ['./meses.component.css']
})
export class MesesComponent {

  meses:string[]=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
  "Setiembre", "Octubre", "Noviembre", "Diciembre"];

  borrarMes(){
    this.meses.pop();
  }

}
