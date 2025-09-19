import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crud',
  imports: [FormsModule],
  templateUrl: './crud.html',
  styleUrl: './crud.css'
})
export class Crud implements OnInit {
  userList: any[] = [];


  userObj: any = {
  "userId": 0,
  "emailId": "",
  "password": "",
  "fullName": "",
  "mobileNo": ""
}


  http = inject(HttpClient);

  ngOnInit(): void {
    this.getUsers()

  }

  getUsers() {
    this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers").subscribe((res: any) => {
      this.userList = res;
    });
  }

  onSaveUser() {
    this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register", this.userObj).subscribe({
      next: (result) => {
        alert("Success");
        this.getUsers();

      },
      error: (error) => {
        alert("Error" + error.error);

      }
    }
    )
  }

}