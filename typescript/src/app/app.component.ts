import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'typescript';
  cars = [ //Jason
    {brand: "Toyota", model: "Vios", year: 2012, price: 260000},
    {brand: "Honda", model: "Jazz", year: 2017, price: 600000},
    {brand: "Ford", model: "Everest", year: 2010, price: 1600000},
    {brand: "Mitsubishi", model: "Strada", year: 2009, price: 630000},
    {brand: "Mazda", model: "Mazda 2", year: 2019, price: 585000}
  ];
  car;
  brand = '';
  model = '';
  year;
  inputBrand: any;
  constructor(){
    this.car = JSON.stringify(this.cars[0]);
    this.brand = this.cars[0].brand;
    this.model = this.cars[0].model;
    this.year = this.cars[0].year;
    /*
    //console.log('Value: '+this.cars[0].brand);
    for(let car of this.cars){
      if(car.price >= 500000){
        console.log('Value: ' + JSON.stringify(car));        
      }else{
        console.log('Price to low');
      }
    }
    //for(let i=0; i < 5; i++){ // ลูปธรรมดา
      //console.log('Value: ' + JSON.stringify(this.cars[i]));
    //} */
  }
  showData(){
    if(this.inputBrand == 2){
      console.log(this.cars[this.inputBrand])
    }
    
  }
}
