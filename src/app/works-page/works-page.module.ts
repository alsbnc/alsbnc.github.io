import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorksPageRoutingModule } from './works-page-routing.module';
import { WorksListComponent } from './works-list/works-list.component';
import { WorksSingleComponent } from './works-single/works-single.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    WorksListComponent,
    WorksSingleComponent
  ],
  imports: [
    CommonModule,
    WorksPageRoutingModule,
    TranslateModule
  ]
})
export class WorksPageModule { }
