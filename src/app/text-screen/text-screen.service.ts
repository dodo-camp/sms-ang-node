import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TextScreenService {

  constructor(private http: HttpClient) { }

  public sendMessage(obj: any): Observable<any> {
    return this.http.post('/api/sendMessage', obj);
  }

}
