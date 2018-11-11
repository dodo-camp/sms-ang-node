import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactInfoService {

  constructor(private http: HttpClient) { }

  public getContactInfo(code: string): Observable<any> {
    return this.http.get(`/api/getContactInfo/${code}`);
  }

}
