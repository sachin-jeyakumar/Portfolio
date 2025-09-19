import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signaldemo',
  imports: [],
  templateUrl: './signaldemo.html',
  styleUrl: './signaldemo.css'
})
export class Signaldemo {
course1 = "MSc";
course2:string = "BE";
course3 = signal<string>("ME");
course4 = signal("BA");

constructor(){
  this.course1 = "BSc";
  this.course3.set("MA");
}
}
