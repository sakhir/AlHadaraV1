import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilsService } from 'src/app/shared/Services/utils.service';

@Component({
  selector: 'app-ahmadiyaat',
  templateUrl: './ahmadiyaat.page.html',
  styleUrls: ['./ahmadiyaat.page.scss'],
})
export class AhmadiyaatPage implements OnInit {

  page='Ahmadiyaat';
  contenu='des xassidas Ahmadiyaat'
  constructor(
    private utilServ : UtilsService ,
    private ActivatedRoute : ActivatedRoute
    
  ) { }

  ngOnInit() {
    this.ActivatedRoute.params.subscribe(()=>{
      this.utilServ.changeShowBtnSearch(true); 
      this.utilServ.changeShowBtnBack(true);
      this.utilServ.changeShowBtnMenu(false); 
  })
  }

}
