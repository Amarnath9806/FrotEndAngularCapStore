import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-refund',
  templateUrl: './refund.component.html',
  styleUrls: ['./refund.component.css']
})
export class RefundComponent implements OnInit {

  refunded:boolean=true
  constructor(private router: Router) { }

  ngOnInit() {
  }
refund(){
  this.refunded=false
  this.router.navigate(['/details']);
}
}
