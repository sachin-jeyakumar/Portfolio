import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lc',
  imports: [],
  templateUrl: './lc.html',
  styleUrl: './lc.css'
})
export class Lc implements OnInit,AfterViewInit,AfterContentChecked,OnDestroy,AfterViewChecked{
  ngOnInit(): void {
      console.log(" i am from this baster init");
  }
  constructor()
  {
    console.log("i fromm this baster constructor");
  }
  ngAfterViewInit(): void {
      console.log("after this baster viewed in init");
  }
  ngAfterContentChecked(): void {
    console.log("after this baster content checked");
  }
  ngAfterViewChecked(): void {
    console.log("after this baster viewed checked");
  }
  ngOnDestroy(): void {
    console.log("after this baster distroyed");
  }

}
