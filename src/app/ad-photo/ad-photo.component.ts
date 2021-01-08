import { Component, OnInit, ViewChild } from '@angular/core';
import { AdPhotoService } from '../Services/ad-photo.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { NgForm } from '@angular/forms';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-ad-photo',
  templateUrl: './ad-photo.component.html',
  styleUrls: ['./ad-photo.component.css']
})
export class AdPhotoComponent implements OnInit {

  [x: string]: any;

  @ViewChild('editAndADD', { static: false }) editAndADD: ModalDirective;
  @ViewChild('editAndADD1', { static: false }) editAndADD1: ModalDirective;

  constructor(public photo: AdPhotoService) {}

  public entity: any;
  public entity1: any;
  public items: any[];
  public id: string;
  public checkedid: any;
  public keyword: string;
  ngOnInit(): void {
    this.photo.getList().subscribe((res: any)=>{

      this.items = res;
      console.log(this.items);
    });
    this.loadData();
  }

  public uploadFile = (files) => {
    if (files.length === 0) {
      return;
    }
  
    let filesToUpload : File[] = files;
    const formData = new FormData();
      
    Array.from(filesToUpload).map((file, index) => {
      return formData.append('file'+index, file, file[0].name);
    });
  
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
    this.photo.getList().subscribe((res: any) => {
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
    this.photo.GetSingle(id).subscribe((res) => {
      this.entity = res;
    });
    this.editAndADD.show();
  }
  showDetail(id: any) {
    debugger;
    this.checkedid = 1;
    this.photo.GetSingle(id).subscribe((res) => {
      this.entity1 = res;
    });
    this.editAndADD1.show();
  }
  
  SaveForm(values: any) {
    if (this.checkedid == 0) {
      this.photo.postItme(values).subscribe((res) => {
        if (res) {
          alert('Do you want add this item?');
          this.loadData();
          this.editAndADD.hide();
        }
      });
    } else {
      this.id = values.id;
      // console.log(values.id);
      this.photo.editItem(this.id, values).subscribe((res) => {
        alert('Are you sure edit this item?');
        this.loadData();
        this.editAndADD.hide();
      });
    }
  }
  deleteShow(id: string) {
    if (confirm('Are you sure delete this item?')) {
      this.photo.deleteItem(id).subscribe((res) => {
        this.loadData();
      });
    }
  }
  // Search() {
  //   this.photo.Search(this.keyword).subscribe(
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
    this.photo.findByTitle(this.title).subscribe(
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



// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-ad-photo',
//   templateUrl: './ad-photo.component.html',
//   styleUrls: ['./ad-photo.component.css']
// })
// export class AdPhotoComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
