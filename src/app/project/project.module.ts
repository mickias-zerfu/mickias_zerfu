import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { WordPressComponent } from './word-press/word-press.component';
import { AngularComponent } from './angular/angular.component';
import { ReactComponent } from './react/react.component';



@NgModule({
  declarations: [
    ProjectsComponent,
    WordPressComponent,
    AngularComponent,
    ReactComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProjectModule { }
