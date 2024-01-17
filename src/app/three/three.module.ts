import { NgModule, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ThreeCompComponent } from './three-comp/three-comp.component';



@NgModule({
  declarations: [
    ThreeCompComponent,
  ],
  imports: [
    CommonModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  exports: [ThreeCompComponent]
})
export class ThreeModule { }
