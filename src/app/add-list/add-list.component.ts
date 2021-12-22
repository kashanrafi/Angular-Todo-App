import { Component, EventEmitter, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {
  localItem: any;
  item: any[] = []; 
  newTask: string = '';

  // @Output() childeData = new EventEmitter<any>();
  constructor() {
     this.localItem = localStorage.getItem("items");
     if (this.localItem == null) {
       this.item = [];
     }
     else{
       this.item = JSON.parse(this.localItem);
     }

  }

  ngOnInit(): void {
  }

  // changeHandler(event:any){
  //   console.log(event,'EVENT')
  //   // this.newTask = event.target.value;
  // }
  addItems() {
    if (this.newTask == '') {
    }
    else {
      // this.childeData.emit(this.newTask);
      this.item.push(this.newTask);
      localStorage.setItem("items", JSON.stringify(this.item));
      this.newTask = '';
      
    }
  }


}
