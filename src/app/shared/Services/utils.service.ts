import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  private  showBtnSearchSubject= new BehaviorSubject<boolean>(false);
  showBtnSearch$= this.showBtnSearchSubject.asObservable();

  private  showBtnBackSubject= new BehaviorSubject<boolean>(false);
  showBtnBack$= this.showBtnBackSubject.asObservable();


  private  showBtnMenuSubject= new BehaviorSubject<boolean>(false);
  showBtnMenu$= this.showBtnMenuSubject.asObservable();
  constructor() { }

  changeShowBtnSearch( statut:boolean) {
    this.showBtnSearchSubject.next(statut);
  }
  changeShowBtnBack( statut:boolean) {
    this.showBtnBackSubject.next(statut);
  }
  changeShowBtnMenu( statut:boolean) {
    this.showBtnMenuSubject.next(statut);
  }


}
