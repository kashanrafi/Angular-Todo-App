import { Component, EventEmitter, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {
  // localItem: any;
  // items: any[] = []; 
  newTask: string = '';

  @Output() childeData = new EventEmitter<any>();
  constructor() {
    //  this.localItem = localStorage.getItem("newTask");
    //  if (this.localItem == null) {
    //    this.newTask = '';
    //  }
    //  else{
    //    this.newTask = JSON.parse(this.localItem);
    //  }

  }

  ngOnInit(): void {
  }

  changeHandler(event:any){
    console.log(event,'EVENT')
    // this.newTask = event.target.value;
  }
  addItems() {
    if (this.newTask == '') {
    }
    else {
      this.childeData.emit(this.newTask);
      this.newTask = '';
      // this.items.push(this.newTask);
      // localStorage.setItem("newTask", JSON.stringify(this.newTask));
    }
  }


}
