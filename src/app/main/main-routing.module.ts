import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowsListingComponent } from './shows-listing/shows-listing.component';
import { ShowDetailsComponent } from './show-details/show-details.component';

const routes: Routes = [
  {
    path: 'shows',
    component: ShowsListingComponent,
  },
  {
    path: 'shows/:showName',
    component: ShowDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}

export const routedComponents = [ShowsListingComponent, ShowDetailsComponent];
