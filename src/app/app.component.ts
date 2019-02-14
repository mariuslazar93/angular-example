import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showData: any;
  loading: boolean;
  errorMsg: string;

  constructor(private dataService: DataService) {}

  getShowData(showName) {
    this.loading = true;
    this.errorMsg = '';
    this.dataService.getShowData(showName.value)
      .subscribe(
        (response) => {
          this.showData = response;
          this.loading = false;
        },
        (error) => {
          console.log(error);
          this.errorMsg = error.message;
          this.loading = false;
        },
      );
  }
}
