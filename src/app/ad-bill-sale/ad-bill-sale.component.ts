import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { AdBillSaleService } from '../Services/ad-bill-sale.service';

@Component({
  selector: 'app-ad-bill-sale',
  templateUrl: './ad-bill-sale.component.html',
  styleUrls: ['./ad-bill-sale.component.css']
})
export class AdBillSaleComponent implements OnInit {

  [x: string]: any;

  @ViewChild('editAndADD', { static: false }) editAndADD: ModalDirective;
  @ViewChild('editAndADD1', { static: false }) editAndADD1: ModalDirective;

  constructor(private BillSale: AdBillSaleService) {}

  public entity: any;
  public entity1: any;
  public items: any[];
  public id: string;
  public checkedid: any;
  public keyword: string;
  ngOnInit(): void {
    // this.BillSale.getList().subscribe((res: any)=>{

    //   this.items = res;
    //   console.log(this.items);
    // });
    this.loadData();
  }
  loadData() {
    this.BillSale.getList().subscribe((res: any) => {
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
    this.BillSale.GetSingle(id).subscribe((res) => {
      this.entity = res;
    });
    this.editAndADD.show();
  }
  showDetail(id: any) {
    debugger;
    this.checkedid = 1;
    this.BillSale.GetSingle(id).subscribe((res) => {
      this.entity1 = res;
    });
    this.editAndADD1.show();
  }
 
  
  SaveForm(values: any) {
    if (this.checkedid == 0) {
      this.BillSale.postItme(values).subscribe((res) => {
        if (res) {
          alert('Do you want add this item?');
          this.loadData();
          this.editAndADD.hide();
        }
      });
    } else {
      this.id = values.id;
      console.log(values.id);
      this.BillSale.editItem(this.id, values).subscribe((res) => {
        alert('Are you sure edit this item?');
        this.loadData();
        this.editAndADD.hide();
      });
    }
  }
  deleteShow(id: string) {
    if (confirm('Are you sure delete this item?')) {
      this.BillSale.deleteItem(id).subscribe((res) => {
        this.loadData();
      });
    }
  }

  Search() {
    this.BillSale.Search(this.keyword).subscribe((response: any) => {
        this. items= response;
        console.log(response);
    }, error => {
        console.log(error);
    });
  }
}


