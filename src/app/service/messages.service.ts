import {inject, Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {CustomRuntimeError} from '../error/custom-runtime-error';

const DEFAULT_DURATION = 3000;

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private snackBar: MatSnackBar = inject(MatSnackBar);

  showMessage(message: string): void {
    this.snackBar.open(message, "", { "duration": DEFAULT_DURATION });
  }

  handleError(error: Error, defaultMessage: string): void {
    if (error instanceof CustomRuntimeError)
      this.snackBar.open(error.message, "", { "duration": DEFAULT_DURATION });
    else
      this.snackBar.open(defaultMessage, "", { "duration": DEFAULT_DURATION });
  }

}
