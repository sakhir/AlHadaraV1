import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilsService } from '../shared/Services/utils.service';
import JSPDF from 'jspdf';
import domtoimage from 'dom-to-image';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File, IWriteOptions } from '@ionic-native/file/ngx'
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page  implements OnInit{

  page="Priéres";
  constructor( 
    private utilServ : UtilsService ,
    private ActivatedRoute : ActivatedRoute,
    private file: File,
    private fileOpener: FileOpener
    ) {}
  ngOnInit():void {
    this.ActivatedRoute.params.subscribe(()=>{
      this.utilServ.changeShowBtnSearch(false); 
      this.utilServ.changeShowBtnMenu(true); 
      this.utilServ.changeShowBtnBack(false); 
     
  })
  }

  // createPdf() {
  //   const pdfBlock = document.getElementById("print-wrapper");
    
  //   const options = { 
  //     background: "white", 
  //     height: pdfBlock.clientWidth, 
  //     width: pdfBlock.clientHeight 
  //   };

  //   domtoimage.toPng(pdfBlock, options).then((fileUrl) => {
  //     var doc = new JSPDF("p","mm","a4");
  //     doc.addImage(fileUrl, 'PNG', 10, 10, 240, 180);
  
  //     let docRes = doc.output();
  //     let buffer = new ArrayBuffer(docRes.length);
  //     let array = new Uint8Array(buffer);
  //     for (var i = 0; i < docRes.length; i++) {
  //         array[i] = docRes.charCodeAt(i);
  //     }
  
  
  //     const directory = this.file.dataDirectory;
  //     const fileName = "user-data.pdf";

  //     let options: IWriteOptions = { 
  //       replace: true 
  //     };
  
  //     this.file.checkFile(directory, fileName).then((res)=> {
  //       this.file.writeFile(directory, fileName,buffer, options)
  //       .then((res)=> {
  //         console.log("File generated" + JSON.stringify(res));
  //         this.fileOpener.open(this.file.dataDirectory + fileName, 'application/pdf')
  //           .then(() => console.log('File is exported'))
  //           .catch(e => console.log(e));
  //       }).catch((error)=> {
  //         console.log(JSON.stringify(error));
  //       });
  //     }).catch((error)=> {
  //       this.file.writeFile(directory,fileName,buffer).then((res)=> {
  //         console.log("File generated" + JSON.stringify(res));
  //         this.fileOpener.open(this.file.dataDirectory + fileName, 'application/pdf')
  //           .then(() => console.log('File exported'))
  //           .catch(e => console.log(e));
  //       })
  //       .catch((error)=> {
  //         console.log(JSON.stringify(error));
  //       });
  //     });
  //   }).catch(function (error) {
  //     console.error(error);
  //   });
  // }

}
