import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const url = environment.Domain_API_URL;
const header = new HttpHeaders({ "Content-Type": "application/json", "X-API-KEY": environment.Domain_API_Key, "environment": "AUDIOMAX", "agency": "10", "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS", "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token" });
@Injectable({
  providedIn: 'root'
})
export class ReportService {
  responseData: any;

  constructor(private http: HttpClient) { }

  getReport(body: any): Promise<any> {
    console.log(body);
    return new Promise((resolve, reject) => {
      this.http.post(url + "reports/query", { headers: header }, body)
        .subscribe(data => {
          console.log(data);
          resolve(data);
        });
    });
  }
}
