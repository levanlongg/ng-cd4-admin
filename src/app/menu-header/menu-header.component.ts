import { Component, OnInit } from '@angular/core';
import { AdBillSaleService } from '../Services/ad-bill-sale.service';
import { AdProductService } from '../Services/ad-product.service';
@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css']
})
export class MenuHeaderComponent implements OnInit {

  constructor(public product: AdProductService) { }
  public items: any[];
  public keyword: string;


  ngOnInit(): void {

  }

  Search() {
    this.product.Search(this.keyword).subscribe((response: any) => {
        this. items= response;
        console.log(response);
    }, error => {
        console.log(error);
    });
  }

}
