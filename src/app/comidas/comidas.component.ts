import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comidas',
  templateUrl: './comidas.component.html',
  styleUrls: ['./comidas.component.css']
})
export class ComidasComponent {

  comidas:string[]=["Hamburguesa", "Asado", "Judías", "Sopa", "Pisto", "Lentejas", "Cocido", "Pollo"];

  borrarListComida(){
    this.comidas.splice(0,this.comidas.length);
  }

}
