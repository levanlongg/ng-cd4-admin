import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const HttpOptionss = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
}
@Injectable({
  providedIn: 'root'
})
export class AdProducerService {

  public urlAPI = "https://localhost:44338/api/Producers";
  constructor(private _http: HttpClient) { }

  getList(): Observable<any[]> {
    return this._http.get<any[]>(this.urlAPI).pipe(map(res => {
      return res;
    }));
  }
  
  postItme(data: any): Observable<any> {
    //debugger;
    return this._http.post<any>(this.urlAPI, data, HttpOptionss).pipe(map(res => {
      return res;
    }));
  }
  GetSingle(id: any): Observable<any> {
    return this._http.get<any>(this.urlAPI + "/" + id).pipe(map(res => {
      return res;
    }));
  }

  editItem(id: string, data: any): Observable<any> {
    //debugger;
    return this._http.put(this.urlAPI + "/" + id, data,HttpOptionss).pipe(map(res => {
      return res;
    }));
  }
  deleteItem(id: string): Observable<any> {
    debugger;
    return this._http.delete<any>(this.urlAPI + "/" + id,HttpOptionss).pipe(map(res => {
      return res;
    }));
  }
  Search(keyword: string): Observable<any[]> {
    return this._http.get<any>(this.urlAPI +"/"+ "search" +"/"+ keyword).pipe(map(res => {
      return res;
    }));
  }
  
}

