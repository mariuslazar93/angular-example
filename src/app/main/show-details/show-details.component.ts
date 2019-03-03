import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ShowsService } from 'src/app/core/services/shows.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss'],
})
export class ShowDetailsComponent implements OnInit {
  public loading;
  public error;
  public show;

  constructor(private route: ActivatedRoute, private showsService: ShowsService) {}

  ngOnInit() {
    this.loading = true;
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          const showName = params.get('showName');
          return this.showsService.getShow('the-blacklist');
        })
      )
      .subscribe(
        (show) => {
          console.log(show);

          this.show = show;
          this.loading = false;
        },
        (error) => {
          this.error = error;
          this.loading = false;
        }
      );
  }
}
