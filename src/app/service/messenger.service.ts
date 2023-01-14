import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs'
import {Product} from "src/app/model/product";

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject()

  constructor() { }

  sendMsg(product: Product){
    this.subject.next(product)
  }

  getMsg(): Observable<any>{ //
    return this.subject.asObservable()
  }
}
