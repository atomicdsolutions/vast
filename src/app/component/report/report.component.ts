import { Component } from '@angular/core';
import { ReportService } from 'src/app/service/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent {
  rurl = '';
  body = '';
  responseData: any;

  constructor(private report: ReportService) { }
  getReport() {
    this.report.getReport( this.body)
      .then(data => {
        this.responseData = data;
      }).catch(err => {
        console.log(err);
      });
  }
}
