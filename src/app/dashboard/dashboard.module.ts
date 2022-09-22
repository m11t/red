import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AbstractSearchFacadeService, SearchFacadeService, SearchModule } from '@red-probeaufgabe/search';
import { UiModule } from '@red-probeaufgabe/ui';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, UiModule, SearchModule, DashboardRoutingModule],
  /**
   * Da die DashboardComponent die abstrakte Klasse AbstractSearchFacadeService per Injection haben möchte
   * wird ein Provider dafür benötigt.
   * Eine abstrakte Klasse ist nicht instanziierbar, daher wird für AbstractSearchFacadeService hier der implementierte SearchFacadeService
   * für das hier verwendete Backend verwendet.
   */
  providers: [
    { provide: AbstractSearchFacadeService, useClass: SearchFacadeService }
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
