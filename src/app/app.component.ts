import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Listing app';
  data: any;
  loading: boolean;
  errorMsg: string;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    this.dataService.getData(url)
      .subscribe(
        (response) => {
          this.data = response;
          this.loading = false;
        },
        (error) => {
          console.log(error);
          this.errorMsg = error.message;
          this.loading = false;
        },
      )
  }
}
