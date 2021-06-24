import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webservice';
  
  constructor(private http: HttpClient){

  }
/*   listUser(){
    console.log('OK');
    let request = this.http.get('http://202.28.34.250/webdev/user')
          .subscribe(response =>{
            console.log('Response: ' + JSON.stringify(response));
          }, error =>{
            console.log('Error: ' + JSON.stringify(error));
          });
        
    console.log('Continew');
    request.unsubscribe();
    console.log('Next Statement');
  } */

  async listUser(){
    console.log('OK');
    let response = await this.http.get('http://202.28.34.250/webdev/user')
          .toPromise();
    console.log('Response: ' + JSON.stringify(response));    
    console.log('Continew');
    //request.unsubscribe();
    console.log('Next Statement');
  }

}

