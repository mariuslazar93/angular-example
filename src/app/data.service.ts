import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private cdnUrl: string = environment.cdnUrl;

  constructor(private http: HttpClient) { }

  getShowData(showName: string) {
    const formattedShowName = showName.toLocaleLowerCase().trim().replace(/\s+/g, '-');
    const url = `${this.cdnUrl}/${formattedShowName}.json`;
    console.log('Getting data from', url);
    return this.http.get(url);
  }
}
