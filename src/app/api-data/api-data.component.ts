import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { APIService } from '../api.service';
@Component({
  selector: 'app-api-data',
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.css']
})
export class APIDataComponent implements OnInit, OnDestroy {

  paramData: any[] = []
  apiData: any[] = [];
  subscription:Subscription;
  constructor(private api: APIService,
   private paramRoute: ActivatedRoute) {

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    }

  ngOnInit(): void {

   this.subscription = this.api.getData().subscribe(data => {
      console.log(data);
      this.apiData = data;
    });

    this.paramRoute.queryParams.subscribe(data => {
      console.log(data);
      this.paramData.push(data);
    })

  }

}
