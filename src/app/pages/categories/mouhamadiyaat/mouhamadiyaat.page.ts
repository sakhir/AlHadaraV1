import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilsService } from 'src/app/shared/Services/utils.service';

@Component({
  selector: 'app-mouhamadiyaat',
  templateUrl: './mouhamadiyaat.page.html',
  styleUrls: ['./mouhamadiyaat.page.scss'],
})
export class MouhamadiyaatPage implements OnInit {
  page='Mouhamadiyaat';
  contenu='des xassidas Mouhamadiyaat'
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
