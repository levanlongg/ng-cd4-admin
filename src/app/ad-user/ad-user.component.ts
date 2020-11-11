import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { from } from 'rxjs';
import { AdUserService } from './ad-user.service'

@Component({
  selector: 'app-ad-user',
  templateUrl: './ad-user.component.html',
  styleUrls: ['./ad-user.component.css']
})
export class AdUserComponent implements OnInit {
  [x: string]: any;

  @ViewChild('editAndADD', { static: false }) editAndADD: ModalDirective;
  @ViewChild('editAndADD1', { static: false }) editAndADD1: ModalDirective;
  constructor(private producttypeService: AdUserService) {}
  

  public entity: any;
  public entity1: any;
  public items: any[];
  public id: string;
  public checkedid: any;
  public keyword: string;
  
  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.UserService.getList().subscribe((res: any) => {
      this.items = res;
      console.log(this.items);
    });
  }
  showAdd() {
    this.entity = {};
    this.checkedid = 0;
    this.editAndADD.show();
  }
  showEdit(id: any) {
    debugger;
    this.checkedid = 1;
    this.UserService.GetSingle(id).subscribe((res) => {
      this.entity = res;
    });
    this.editAndADD.show();
  }
  showDetail(id: any) {
    debugger;
    this.checkedid = 1;
    this.UserService.GetSingle(id).subscribe((res) => {
      this.entity1 = res;
    });
    this.editAndADD1.show();
  }
  SaveForm(values: any) {
    debugger;
    if (this.checkedid == 0) {
      this.UserService.postItme(values).subscribe((res) => {
        if (res) {
          alert('Do you want add this item?');
          this.loadData();
          this.editAndADD.hide();
        }
      });
    } else {
      this.id = values.id;
      console.log(values.id);
      this.UserService.editItem(this.id, values).subscribe((res) => {
        alert('Are you sure edit this item?');
        this.loadData();
        this.editAndADD.hide();
      });
    }
  }
  deleteShow(id: string) {
    if (confirm('Are you sure delete this item?')) {
      this.UserService.deleteItem(id).subscribe((res) => {
        this.loadData();
      });
    }
  }
  // Search() {
  //   this.typenewService.Search(this.keyword).subscribe(
  //     (response: any) => {
  //       this.employees = response;
  //       console.log(response);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }

  searchTitle(): void {
    this.UserService.findByTitle(this.title).subscribe(
      (data) => {
        this.tutorials = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
