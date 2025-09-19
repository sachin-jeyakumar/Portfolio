import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Ex5 } from '../app/ex5/ex5';
import { Education } from '../education/education';
import { Experience } from '../experience/experience';
import { Skills } from '../skills/skills';

@Component({
  selector: 'app-contact',
  imports: [RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  imagePath = '/assets/background.jpeg';
}
