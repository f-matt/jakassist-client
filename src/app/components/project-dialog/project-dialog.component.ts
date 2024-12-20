import {Component, inject} from '@angular/core';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MessagesService} from '../../service/messages.service';
import {MatButtonModule} from '@angular/material/button';
import {ProjectsService} from '../../service/projects.service';
import {Project} from '../../model/project';

@Component({
  selector: 'app-project-dialog',
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './project-dialog.component.html',
  styleUrl: './project-dialog.component.scss'
})
export class ProjectDialogComponent {

  private messagesService: MessagesService = inject(MessagesService);

  private projectsService: ProjectsService = inject(ProjectsService);

  private dialogRef: MatDialogRef<ProjectDialogComponent> = inject(MatDialogRef<ProjectDialogComponent>);

  protected  projectFormGroup: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl()
  });

  save(): void {
    let project: Project = <Project> this.projectFormGroup.value;
    this.projectsService.save(project).subscribe({
      next: (): void => {
        this.dialogRef.close();
        this.messagesService.showMessage("Project successfully saved!");
      },
      error: (e: Error) => {
        this.messagesService.handleError(e, "Error saving project.");
      }
    });
  }

}
