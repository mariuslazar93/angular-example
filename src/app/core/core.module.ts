import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ShowsService } from './services/shows.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [ShowsService]
})
export class CoreModule { }
