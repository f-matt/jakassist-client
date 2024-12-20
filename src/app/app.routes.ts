import { Routes } from '@angular/router';
import {IndexComponent} from './components/index/index.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {ProjectDialogComponent} from './components/project-dialog/project-dialog.component';

export const routes: Routes = [
  {
    path: "",
    component: IndexComponent
  },

  {
    path: "home",
    component: IndexComponent
  },

  {
    path: "projects",
    component: ProjectsComponent
  },

  {
    path: "project",
    component: ProjectDialogComponent
  },
];
