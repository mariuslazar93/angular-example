import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ShowsService {
  private cdnUrl: string = environment.cdnUrl;

  constructor(private http: HttpClient) {}

  getAllShows() {
    const url = `${this.cdnUrl}/shows/shows.json`;
    return this.http.get(url);
  }

  getShow(name) {
    const formattedShowName = name
      .toLocaleLowerCase()
      .trim()
      .replace(/\s+/g, '-');
    const url = `${this.cdnUrl}/shows/${formattedShowName}.json`;
    return this.http.get(url);
  }
}
