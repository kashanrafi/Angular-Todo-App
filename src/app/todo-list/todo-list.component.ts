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
  // @Input()
  items: string[] = [];
  arrowIcon = faArrowUp;
  downIcon = faArrowDown;
  constructor() {

  }

  ngOnInit(): void {
    
    this.localItem = localStorage.getItem("items");
    if (this.localItem == null) {
      this.items = [];
    }
    else {

      this.items = JSON.parse(this.localItem);
    }
  
    console.log(this.items, 'TOD_LIST')
  }
  delItems(index: any) {
    console.log(index);
    this.items.splice(index, 1);
    localStorage.setItem("items", JSON.stringify(this.items));
  }
  editItems(index: number) {
    console.log(this.items[index]);
    let title = this.items[index];
    let res = prompt("Enter new value", title);
    if (res !== null && res !== "") {
      this.items[index] = res;
    }
    localStorage.setItem("items", JSON.stringify(this.items));
  }
  moveUp(item: string, index: number) {

    if (index > 0) {
      const tmp = this.items[index - 1];
      this.items[index - 1] = this.items[index];
      this.items[index] = tmp;
    }
    else if (index == 0) {
      this.items.push(item);
      this.items.splice(index, index + 1);

      // const tmp = this.items[this.items.length - 1];
      // this.items[this.items.length - 1] = this.items[index];
      // this.items[index] = tmp;
    }
    localStorage.setItem("items", JSON.stringify(this.items));

  }
  moveDown(item: string, index: number) {
    if (index < this.items.length && index != this.items.length - 1) {
      const tmp = this.items[index + 1];
      this.items[index + 1] = this.items[index];
      this.items[index] = tmp;
    }
    else if (index == this.items.length - 1) {

      // this.items.unshift(item);
      // this.items.splice(index);

      const tmp = this.items[0];
      this.items[0] = this.items[index];
      this.items[index] = tmp;
    }
    localStorage.setItem("items", JSON.stringify(this.items));
  }

}
