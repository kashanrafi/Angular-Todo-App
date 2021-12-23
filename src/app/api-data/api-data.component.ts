import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from '../api.service';
@Component({
  selector: 'app-api-data',
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.css']
})
export class APIDataComponent implements OnInit {

  paramData: any[] = []
  apiData: any[] = [];
  constructor(private api: APIService,
    private paramRoute: ActivatedRoute) {

  }

  ngOnInit(): void {

    this.api.getData().subscribe(data => {
      console.log(data);
      this.apiData = data;
    });
    this.paramRoute.queryParams.subscribe(data =>{
      console.log(data);
      this.paramData.push(data);
    })

  }

}
