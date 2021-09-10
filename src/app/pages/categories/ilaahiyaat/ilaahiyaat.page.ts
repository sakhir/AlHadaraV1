import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilsService } from 'src/app/shared/Services/utils.service';

@Component({
  selector: 'app-ilaahiyaat',
  templateUrl: './ilaahiyaat.page.html',
  styleUrls: ['./ilaahiyaat.page.scss'],
})
export class IlaahiyaatPage implements OnInit {
  page='Ilaahiyaat';
  contenu='des xassidas ilaahiyaat'
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
