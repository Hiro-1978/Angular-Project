import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatapassService } from '../datapass.service';

@Component({
  selector: 'app-member2',
  templateUrl: './member2.component.html',
  styleUrls: ['./member2.component.css']
})
export class Member2Component implements OnInit {


  constructor(private datapass : DatapassService,
    private router : ActivatedRoute) {
    let idx = router.snapshot.params['index'];
    console.log(datapass.cars[idx].model)
   }

  ngOnInit(): void {
  }
/* 
  goToMember1(){
    console.log('Enter')
    this.router.navigateByUrl('/member1');
  }
 */
}
