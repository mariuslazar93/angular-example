import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

interface DataModel {
  showName: string;
  season: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showData: any;
  loading: boolean;
  errorMsg: string;
  model: DataModel = {
    showName: '',
    season: '',
  };

  constructor(private dataService: DataService) {}

  getShowData() {
    this.loading = true;
    this.errorMsg = '';
    this.dataService.getShowData(this.model.showName, this.model.season)
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
