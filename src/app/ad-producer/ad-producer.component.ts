import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { AdProducerService } from '../Services/ad-producer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-ad-producer',
  templateUrl: './ad-producer.component.html',
  styleUrls: ['./ad-producer.component.css'],
  providers: [MessageService],
})
export class AdProducerComponent implements OnInit {

  [x: string]: any;
  public progress: number;
  public message: string;
  @ViewChild('editAndADD', { static: false }) editAndADD: ModalDirective;
  @ViewChild('editAndADD1', { static: false }) editAndADD1: ModalDirective;
  @Output() public onUploadFinished = new EventEmitter();

  constructor(
    public Producer: AdProducerService,
    public http: HttpClient,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    ) { }
  
  public response: {dbPath: ''};
  public entity: any;
  public entity1: any;
  public items: any[];
  public id: string;
  public form: FormGroup;
  public checkedid: any;
  public keyword: string;


  ngOnInit(): void {
    this.loadData();

    this.form = this.formBuilder.group({
      logo: ['', [Validators.required]],
      producerName: ['', [Validators.required]],
      producerAddress: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      email: ['', [Validators.required]],
    });
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
  // public uploadFile = (files) => {
  //   if (files.length === 0) {
  //     return;
  //   }
  //   let fileToUpload = <File>files[0];
  //   const formData = new FormData();
  //   formData.append('file', fileToUpload, fileToUpload.name);
  //   this.http.post('https://localhost:44338/api/upload', formData, {reportProgress: true, observe: 'events'})
  //     .subscribe(event => {
  //       if (event.type === HttpEventType.UploadProgress)
  //         this.progress = Math.round(100 * event.loaded / event.total);
  //       else if (event.type === HttpEventType.Response) {
  //         this.message = 'Upload success.';
  //         this.onUploadFinished.emit(event.body);
  //       }
  //     });
  // }
  
  loadData() {
    this.Producer.getList().subscribe((res: any) => {
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
    this.Producer.GetSingle(id).subscribe((res) => {
      this.entity = res;
    });
    this.editAndADD.show();
  }
  
  showDetail(id: any) {
    debugger;
    this.checkedid = 1;
    this.Producer.GetSingle(id).subscribe((res) => {
      this.entity1 = res;
    });
    this.editAndADD1.show();
  }

   SaveForm(values: any) {
  //SaveForm() {
    this.iSubmited = true;
    // let organ = {
    //   producerName: this.form.value.producerName,
    //   producerAddress: this.form.value.producerAddress,
    //   logo: this.form.value.logo,
    //   phoneNumber: this.form.value.phoneNumber,
    //   email: this.form.value.email,
    // }
    if (this.checkedid == 0) {
      //console.log(organ);
      
      this.Producer.postItme(values).subscribe((res) => {
        if (res) {
          confirm('Do you want add this item?');
          // this.response.dbPath;
          this.loadData();
          this.editAndADD.hide();
          this.messageService.add({
            severity: 'success',
            summary: 'Thành công!',
            detail: 'Thêm lĩnh vực thành công!',
          });
        }
      },(err) => {
        if (err.status != 1) {
          this.messageService.add({
            severity: 'error',
            summary: 'Thất bại!',
            detail: err.error.message,
          });
        }
      });
    } 
    else {
      this.id = values.id;
      console.log(values.id);
      this.Producer.editItem(this.id, values).subscribe((res) => {
        alert('Are you sure edit this item?');
        this.loadData();
        this.editAndADD.hide();
      });
    }
  }

  deleteShow(id: string) {
    if (confirm('Are you sure delete this item?')) {
      this.Producer.deleteItem(id).subscribe((res) => {
        this.loadData();
      });
    }
  }

  Search() {
    this.Producer.Search(this.keyword).subscribe((response: any) => {
        this. items= response;
        console.log(response);
    }, error => {
        console.log(error);
    });
  }
  
public uploadFinished = (event) => {
  this.response = event;
}

public createImgPath = (serverPath: string) => {
  return `https://localhost:44338/api/Producers/${serverPath}`;
}
}

