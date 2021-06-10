import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { DatapassService } from '../datapass.service';

@Component({
  selector: 'app-member1',
  templateUrl: './member1.component.html',
  styleUrls: ['./member1.component.css']
})
export class Member1Component implements OnInit {
  idx: any;
  constructor(private router : Router, private data : DatapassService) { } // แบบที่2

  ngOnInit(): void {
  }

  goToMember2(){ // แบบที่2
    this.data.cars = [ //Jason
      {brand: "Toyota", model: "Vios", year: 2012, price: 260000},
      {brand: "Honda", model: "Jazz", year: 2017, price: 600000},
      {brand: "Ford", model: "Everest", year: 2010, price: 1600000},
      {brand: "Mitsubishi", model: "Strada", year: 2009, price: 630000},
      {brand: "Mazda", model: "Mazda 2", year: 2019, price: 585000}
    ];
    this.router.navigateByUrl('/member2/'+this.idx);
  }

}
