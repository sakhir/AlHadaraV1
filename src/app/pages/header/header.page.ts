import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { UtilsService } from 'src/app/shared/Services/utils.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
})
export class HeaderPage implements OnInit {

  showBtn$:Observable<boolean>
  showBtnBack$:Observable<boolean>
  showBtnMenu$:Observable<boolean>
  @Input()  titrePage="";
  @Input()  contenuPage="";
  constructor( private utilServ : UtilsService ,
    public navCtrl: NavController,
    ) { }

    
  ngOnInit() {
 
     
    this.showBtn$=this.utilServ.showBtnSearch$
    this.showBtnBack$=this.utilServ.showBtnBack$
    this.showBtnMenu$=this.utilServ.showBtnMenu$
    
    
  }
  Back(){
    this.navCtrl.back();
    
     }

}
