import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Subject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Injectable()
export class DashBoardService {
  constructor(
    private http: HttpClient,
  ) {}


  private url1 = new Subject<any>();

  private url2 = new Subject<any>();

  setUrl(state: string, type: string) {
    if(type == 'url1')
    this.url1.next(state);
    else
    this.url2.next(state);
  }

  getUrl1(): Observable<any> {
    return this.url1.asObservable().pipe(
      debounceTime(400),
      distinctUntilChanged()
    );
  }
  getUrl2(): Observable<any> {
    return this.url2.asObservable().pipe(
      debounceTime(400),
      distinctUntilChanged()
    );;
  }



 
}
