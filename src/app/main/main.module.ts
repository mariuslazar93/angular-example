import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { routedComponents, MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [routedComponents],
  imports: [SharedModule, MainRoutingModule],
})
export class MainModule {}
