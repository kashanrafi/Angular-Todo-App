import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Todo-Task';
  // localItem: any;
  // items: any[] = []; 
  constructor() { 
 }
  ngOnInit(): void {
    // this.localItem = localStorage.getItem("items");
    // if (this.localItem == null) {
    //   this.items = [];
    // }
    // else{
    //   this.items = JSON.parse(this.localItem);
    // }
    
  }

  
  // todoHandler (todo:string) {
  //   console.log(todo, "Todo");
  //   this.items.push(todo);
  //   localStorage.setItem("items", JSON.stringify(this.items));
  // }
}
