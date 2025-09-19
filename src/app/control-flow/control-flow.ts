import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css'
})
export class ControlFlow {
  test:boolean=true;
  month:string="";
  city:string[]=["cbe","chn","sal","kar"];
  stud:any=[{name:'ron',age:19,city:'cbe'},{name:'vib',age:20,city:'cbe'}];

  showP()
  {
    this.test=true;
  }
  hideP()
  {
    this.test=false;
  }

}
