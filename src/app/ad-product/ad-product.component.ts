import { Component, OnInit, ViewChild } from '@angular/core';
import { AdProductService } from '../Services/ad-product.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { NgForm } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-ad-product',
  templateUrl: './ad-product.component.html',
  styleUrls: ['./ad-product.component.css']
})
export class AdProductComponent implements OnInit {

  [x: string]: any;
  

  @ViewChild('editAndADD', { static: false }) editAndADD: ModalDirective;
  @ViewChild('editAndADD1', { static: false }) editAndADD1: ModalDirective;

  constructor(public typenewService: AdProductService) {}
  public progress: number;
  public message: string;
  public Editor = ClassicEditor;
  public entity: any;
  public entity1: any;
  public filterTerm: string;
  public items: any[];
  public id: string;
  public checkedid: any;
  public keyword: string;
  
  ngOnInit(): void {
    this.loadData();
  }

  public uploadFile = (files) => {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.http.post('https://localhost:44338/api/upload', formData, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * event.loaded / event.total);
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          this.onUploadFinished.emit(event.body);
        }
      });
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
    //debugger;
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
  Search() {
    this.typenewService.Search(this.keyword).subscribe((response: any) => {
        this. items= response;
        console.log(response);
    }, error => {
        console.log(error);
    });
  }
}


