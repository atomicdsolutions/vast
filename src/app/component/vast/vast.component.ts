import { Component } from '@angular/core';
import { VastService } from 'src/app/service/vast.service';
@Component({
  selector: 'app-vast',
  templateUrl: './vast.component.html',
  styleUrls: ['./vast.component.scss']
})
export class VastComponent{

  xmlUrl = '';
  jsonData: any;
  responsetime = 0;

  constructor(private vast: VastService) { }


  getVast() {
    const startTime = Date.now();
    this.vast.getResponse(this.xmlUrl)
      .then(data => {
      this.responsetime = Date.now() - startTime;
        this.jsonData = data;
      }).catch(err => {
        console.log(err);
      });
  }

}
