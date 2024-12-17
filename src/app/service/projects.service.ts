import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Project} from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  search(name: string): Observable<Project[]> {
    return of<Project[]>([]);
  }

}
