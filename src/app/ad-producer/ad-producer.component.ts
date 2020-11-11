import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { AdProducerService } from './ad-producer.service'

@Component({
  selector: 'app-ad-producer',
  templateUrl: './ad-producer.component.html',
  styleUrls: ['./ad-producer.component.css']
})
export class AdProducerComponent implements OnInit {

  [x: string]: any;

  @ViewChild('editAndADD', { static: false }) editAndADD: ModalDirective;
  @ViewChild('editAndADD1', { static: false }) editAndADD1: ModalDirective;
  constructor(public AdProducerService: AdProducerService) {}
  

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
    this.AdProducerService.getList().subscribe((res: any) => {
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
    this.AdProducerService.GetSingle(id).subscribe((res) => {
      this.entity = res;
    });
    this.editAndADD.show();
  }
  showDetail(id: any) {
    debugger;
    this.checkedid = 1;
    this.AdProducerService.GetSingle(id).subscribe((res) => {
      this.entity1 = res;
    });
    this.editAndADD1.show();
  }
  SaveForm(values: any) {
    if (this.checkedid == 0) {
      this.AdProducerService.postItme(values).subscribe((res) => {
        if (res) {
          alert('Do you want add this item?');
          this.loadData();
          this.editAndADD.hide();
        }
      });
    } else {
      this.id = values.id;
      console.log(values.id);
      this.AdProducerService.editItem(this.id, values).subscribe((res) => {
        alert('Are you sure edit this item?');
        this.loadData();
        this.editAndADD.hide();
      });
    }
  }
  deleteShow(id: string) {
    if (confirm('Are you sure delete this item?')) {
      this.AdProducerService.deleteItem(id).subscribe((res) => {
        this.loadData();
      });
    }
  }
  Search() {
    this.AdProducerService.Search(this.keyword).subscribe((res: any) => {
        this.items = res;
        console.log(res);
    }, error => {
        console.log(error);
    });
}

  // searchTitle(): void {
  //   this.AdProducerService.findByTitle(this.title).subscribe(
  //     (data) => {
  //       this.tutorials = data;
  //       this.loadData();
  //       // console.log(data);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }
}

