import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as xml2js from 'xml2js';
let header = new HttpHeaders();
const vurl = 'https://vast.megaphone.cloud/?org_id=f3f94c64-651c-11ed-868a-7730a45e6c69&episode_guid=d4992e42-4efc-11ed-93d0-7b423bca696e&pos=pre'

@Injectable({
  providedIn: 'root'
})
export class VastService {
  jsonData: any;

  constructor(private http: HttpClient) { }

  getResponse(vasturl: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(vasturl, { responseType: "text" })
        .subscribe(data => {
          xml2js.parseString(data, (err, result) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          });
        });
    });
  }
}