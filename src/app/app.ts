import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Admin } from "./admin/admin";
import { Signaldemo } from './signaldemo/signaldemo';
import { Lc } from "./lc/lc";
import { Ex2 } from "./ex2/ex2";
import { ControlFlow } from "./control-flow/control-flow";
import { Ex5 } from "./ex5/ex5";
import { GetApi } from "./get-api/get-api";
import { Crud } from "./crud/crud";
import { Servicedemo } from "./servicedemo/servicedemo";
import { Skills } from '../skills/skills';
import { Education } from '../education/education';
import { Experience } from '../experience/experience';
import { Contact } from '../contact/contact';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  imagePath = '/background.jpeg';
}