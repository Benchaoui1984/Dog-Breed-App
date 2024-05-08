import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopPupComponent } from '../../shared/pop-pup/pop-pup.component';

@Injectable({
  providedIn: 'root',
})
export class ErrorManagerService {
  constructor(private dialogRef: MatDialog, private injector: Injector) {}

  manage(response: HttpErrorResponse) {
    debugger;
    switch (response.status) {
      case HttpStatusCode.BadRequest:
      case HttpStatusCode.NotFound:
      case HttpStatusCode.Conflict:
        this.dialogRef.open(PopPupComponent, {
          data: {
            message: `${response.status}`,
          },
        });
        break;
      case HttpStatusCode.Unauthorized:
      case HttpStatusCode.Forbidden:
        this.dialogRef.open(PopPupComponent, {
          data: {
            message: `${response.statusText}`,
          },
        });

        break;
      default:
        debugger;
        this.dialogRef.open(PopPupComponent, {
          data: {
            message: `${response.statusText}`,
          },
        });
    }
  }
}
