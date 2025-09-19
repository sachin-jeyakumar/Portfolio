import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo',
  imports: [],
  templateUrl: './demo.html',
  styleUrl: './demo.css'
})
export class Demo {

 name:string="Ram";
  sss:string = "text";
  name1:string="sam";
  selectedcity:string="";
  names:string[]= ["ronick","vibin"];

    myfunc()
    {
      this.name = "sam";

    }

    changecity(selectedcity:string)
    {
      alert(this.selectedcity);
    }
    
}
