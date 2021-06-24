import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email!:string;
  password!:string;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    console.log('OK');
    let json = { email : this.email, password : this.password}
    this.http.post('htto://202.28.34.250/webdev/login', JSON.stringify(json))
      .subscribe(response =>{
        console.log(response);
        // Change Page
        if(response){
          console.log('Login OK');
          this.router.navigateByUrl('/member')
        }else{
          console.log('Login Fail');
        }
      }, error =>{
        console.log('Fail');
      });
  }
}

//**** พักยกไปเรียน PHP ก่อน ไม่งั้น งง??? ****
