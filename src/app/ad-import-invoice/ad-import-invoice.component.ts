import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { AdImportInvoiceService } from '../ad-import-invoice/ad-import-invoice.service';

@Component({
  selector: 'app-ad-import-invoice',
  templateUrl: './ad-import-invoice.component.html',
  styleUrls: ['./ad-import-invoice.component.css']
})
export class AdImportInvoiceComponent implements OnInit {

  [x: string]: any;

  @ViewChild('editAndADD', { static: false }) editAndADD: ModalDirective;
  @ViewChild('editAndADD1', { static: false }) editAndADD1: ModalDirective;

  constructor(private typenewService: AdImportInvoiceService) {}

  public entity: any;
  public entity1: any;
  public items: any[];
  public id: string;
  public checkedid: any;
  public keyword: string;
  ngOnInit(): void {
    this.typenewService.getList().subscribe((res: any)=>{

      this.items = res;
      console.log(this.items);
    });
    this.loadData();
  }
  loadData() {
    this.typenewService.getList().subscribe((res: any) => {
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
    this.typenewService.GetSingle(id).subscribe((res) => {
      this.entity = res;
    });
    this.editAndADD.show();
  }
  showDetail(id: any) {
    debugger;
    this.checkedid = 1;
    this.typenewService.GetSingle(id).subscribe((res) => {
      this.entity1 = res;
    });
    this.editAndADD1.show();
  }
  SaveForm(values: any) {
    if (this.checkedid == 0) {
      this.typenewService.postItme(values).subscribe((res) => {
        if (res) {
          alert('Do you want add this item?');
          this.loadData();
          this.editAndADD.hide();
        }
      });
    } else {
      this.id = values.id;
      console.log(values.id);
      this.typenewService.editItem(this.id, values).subscribe((res) => {
        alert('Are you sure edit this item?');
        this.loadData();
        this.editAndADD.hide();
      });
    }
  }
  deleteShow(id: string) {
    if (confirm('Are you sure delete this item?')) {
      this.typenewService.deleteItem(id).subscribe((res) => {
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
    this.typenewService.findByTitle(this.title).subscribe(
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

