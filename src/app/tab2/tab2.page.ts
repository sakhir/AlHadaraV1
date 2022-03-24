import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilsService } from '../shared/Services/utils.service';
import domtoimage from 'dom-to-image';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File, IWriteOptions } from '@ionic-native/file/ngx';
import JSPDF from 'jspdf';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit {
  page='Xassida';
  contenu='de tous les xassida'
  constructor( private utilServ : UtilsService ,
    private ActivatedRoute : ActivatedRoute ,
  
    private navCtrl :NavController,

    private file: File,
    private fileOpener: FileOpener
 
    ) {}
     

  

  ngOnInit():void {
    
    this.ActivatedRoute.params.subscribe(()=>{
      this.utilServ.changeShowBtnSearch(true); 
      this.utilServ.changeShowBtnMenu(true);
      this.utilServ.changeShowBtnBack(false);
       
      
  })
  }


  OpenLocalPdf(){
  
    // let filePath = this.file.applicationDirectory + 'public/assets/';

 
    //    const options: DocumentViewerOptions = {
    //       title: 'My PDF'
    //    }
    //    this.document.viewDocument(`${filePath}/khamdi.pdf`, `application/pdf`, options);



    
  }

  // import { HTTP, HTTPResponse } from '@ionic-native/http/ngx';

  // constructor(
  //   private adHTTP: HTTP
  // )
  // ...
  //  const reqOptions: any = {
  //    method: 'get',
  //    responseType: 'blob'
  //  };
  //  let res: HTTPResponse = await this.adHTTP.sendRequest(source, reqOptions);
  //  let blob: Blob = res.data;
  //  await this.file.writeFile(path, filename, blob, { replace: true });

  // voici un lien aussi à voir pour lire les pdf : 
  // https://angular.io/guide/http  
  //https://www.youtube.com/watch?v=k2iaGNApM9w&ab_channel=SimonGrimm
  //https://www.positronx.io/ionic-angular-create-export-and-view-pdf-file-tutorial/
  // https://www.youtube.com/watch?v=QZ-CRdhxQbI&ab_channel=SimonGrimm a tester en premier lieu

  
}
