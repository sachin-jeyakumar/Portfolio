import { Component, inject, OnInit } from '@angular/core';
import { Master } from '../servies/master';

@Component({
  selector: 'app-servicedemo',
  imports: [],
  templateUrl: './servicedemo.html',
  styleUrl: './servicedemo.css'
})
export class Servicedemo implements OnInit{
  masterService = inject(Master);
  result:number = 0;
  ngOnInit(): void {
      this.result = this.masterService.getSum(12,40);
  }

}
