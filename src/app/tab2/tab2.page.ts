import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilsService } from '../shared/Services/utils.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  page='Xassida';
  contenu='de tous les xassida'
  constructor( private utilServ : UtilsService ,
    private ActivatedRoute : ActivatedRoute
    ) {}

  ngOnInit():void {
    
    this.ActivatedRoute.params.subscribe(()=>{
      this.utilServ.changeShowBtnSearch(true); 
      this.utilServ.changeShowBtnMenu(true);
      this.utilServ.changeShowBtnBack(false);
       
      
  })
  }
}
