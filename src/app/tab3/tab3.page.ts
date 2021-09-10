import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilsService } from '../shared/Services/utils.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page  implements OnInit{

  page="Priéres";
  constructor( 
    private utilServ : UtilsService ,
    private ActivatedRoute : ActivatedRoute
    ) {}
  ngOnInit():void {
    this.ActivatedRoute.params.subscribe(()=>{
      this.utilServ.changeShowBtnSearch(false); 
      this.utilServ.changeShowBtnMenu(true); 
      this.utilServ.changeShowBtnBack(false); 
     
  })
  }

}
