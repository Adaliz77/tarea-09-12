import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flores',
  templateUrl: './flores.component.html',
  styleUrls: ['./flores.component.css']
})
export class FloresComponent {

  flores:string[]=["Rosa", "Clavel", "Jazmín", "Margarita", "Lirio", "Lavanda", "Geranios", "Hortensia"];

  borrarListFlores(){
    this.flores.splice(0,8);
  }

}
