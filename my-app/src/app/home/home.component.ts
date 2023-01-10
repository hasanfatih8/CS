import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authentication.service';
import { HttpClient } from '@angular/common/http';
interface User {
  name: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user$ = this.authService.currentUser$;

  constructor(private authService: AuthService, private http: HttpClient) {}

  userName$ = '';

  getUserName(userId: string) {
    this.http.get<User>(`https://csvs-f0f9c-default-rtdb.europe-west1.firebasedatabase.app/${userId}`)
      .subscribe(user => this.userName$ = user.name);
  }

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => {
      if(user){
         this.getUserName('gBovhXf9LTPq3dBf8ueDwaOChwu2');
      }
    });
  }

}
