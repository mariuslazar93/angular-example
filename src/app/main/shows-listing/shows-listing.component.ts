import { Component, OnInit } from '@angular/core';
import { ShowsService } from 'src/app/core/services/shows.service';

@Component({
  selector: 'app-shows-listing',
  templateUrl: './shows-listing.component.html',
  styleUrls: ['./shows-listing.component.scss'],
})
export class ShowsListingComponent implements OnInit {
  public shows;
  public loading;
  public error;

  constructor(private showsService: ShowsService) {}

  ngOnInit() {
    this.getShows();
  }

  getShows() {
    this.loading = true;
    this.showsService.getAllShows().subscribe(
      (shows) => {
        this.shows = shows;
        this.loading = false;
      },
      (error) => {
        this.error = error;
        this.loading = false;
      }
    );
  }
}
