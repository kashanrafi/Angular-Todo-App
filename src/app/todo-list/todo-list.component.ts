import { Component, Input, OnInit } from '@angular/core';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  localItem: any;
  @Input() parentData: any[];
  arrowIcon = faArrowUp;
  downIcon = faArrowDown;
  preRow: any;
  showModal: boolean = false;
  constructor() {
    this.localItem = localStorage.getItem("parentData");
    if (this.localItem == null) {
      this.parentData = [];
    }
    else {
      this.parentData = JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {
  }
  delItems(index: any) {
    console.log(index);
    this.parentData.splice(index, 1);
    localStorage.setItem("items", JSON.stringify(this.parentData));
  }
  editItems(index: number) {
    console.log(this.parentData[index]);
    let title = this.parentData[index];
    let res = prompt("Enter new value", title);
    if (res !== null && res !== "") {
      this.parentData[index] = res;
    }
    localStorage.setItem("items", JSON.stringify(this.parentData));
  }
  moveUp(item: string, index: number) {

    if (index > 0) {
      const tmp = this.parentData[index - 1];
      this.parentData[index - 1] = this.parentData[index];
      this.parentData[index] = tmp;
    }
    localStorage.setItem("items", JSON.stringify(this.parentData));

  }
  moveDown(item: string, index: number) {
    if (index < this.parentData.length && index != this.parentData.length - 1) {
      const tmp = this.parentData[index + 1];
      this.parentData[index + 1] = this.parentData[index];
      this.parentData[index] = tmp;
    }
    localStorage.setItem("items", JSON.stringify(this.parentData));
  }

}
