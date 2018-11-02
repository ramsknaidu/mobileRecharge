import { Component, OnInit } from '@angular/core';
import { MobilePlan } from '../mobile-plan';
import { MobileRechargeAPIService } from '../mobile-recharge-api.service';

@Component({
  selector: 'app-show-mobile-plan',
  templateUrl: './show-mobile-plan.component.html',
  styleUrls: ['./show-mobile-plan.component.css']
})
export class ShowMobilePlanComponent implements OnInit {

  mobilePlansList: MobilePlan[];
  constructor(private service: MobileRechargeAPIService) { }

  ngOnInit() {
    this.service.findAllMobilePlans().subscribe(data => this.mobilePlansList = data,err => console.error());
  }

}
