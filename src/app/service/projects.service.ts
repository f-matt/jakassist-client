import {inject, Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Project} from '../model/project';
import {CustomRuntimeError} from '../error/custom-runtime-error';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

const API_URL: string = environment.API_URL;

const PROJECTS_PATH: string = "projects";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private httpClient: HttpClient = inject(HttpClient);

  search(name: string): Observable<Project[]> {
    return of<Project[]>([]);
  }

  save(project: Project): Observable<Project> {
    if (!project)
      throw new CustomRuntimeError("Project is mandatory.");

    if (project.id)
      return this.httpClient.patch<Project>(`${API_URL}/${PROJECTS_PATH}`, project);
    else
      return this.httpClient.post<Project>(`${API_URL}/${PROJECTS_PATH}`, project);
  }

}
