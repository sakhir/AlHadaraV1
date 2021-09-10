import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilsService } from 'src/app/shared/Services/utils.service';

@Component({
  selector: 'app-tidianiyaat',
  templateUrl: './tidianiyaat.page.html',
  styleUrls: ['./tidianiyaat.page.scss'],
})
export class TidianiyaatPage implements OnInit {

  page='Tidianiyaat';
  contenu='des xassidas Tidianiyaat'
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
