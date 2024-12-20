import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {Project} from '../../model/project';
import {MatDialog} from '@angular/material/dialog';
import {MessagesService} from '../../service/messages.service';
import {ProjectsService} from '../../service/projects.service';
import {DataSourceWrapper} from '../../util/data-source-wrapper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import {ProjectDialogComponent} from '../project-dialog/project-dialog.component';

@Component({
  selector: 'app-projects',
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  private dialog: MatDialog = inject(MatDialog);

  private messagesService: MessagesService = inject(MessagesService);

  private projectsService: ProjectsService = inject(ProjectsService);

  protected projectForm: FormGroup = new FormGroup({
    name: new FormControl()
  });

  protected dataSourceWrapper: DataSourceWrapper<Project> = new DataSourceWrapper<Project>([], ["name", "actions"], [5, 10, 20]);

  search(): void {
    let name: string = this.projectForm.value["name"];
    if (!name) {
      this.messagesService.showMessage("Error: you must enter a name.");
      return;
    }

    this.projectsService.search(name).subscribe({
      next: (projects: Project[]) => {
        this.dataSourceWrapper.update(projects);
        if (projects.length < 1)
          this.messagesService.showMessage("No projects found with the given name.");
      },
      error: (e: Error) => {
        this.messagesService.handleError(e, "Error searching projects.");
      }
    });
  }

  new() {
    this.dialog.open(ProjectDialogComponent);
  }

  edit(project: Project): void {
    this.messagesService.showMessage("Under construction...");
  }

}
