import { Component, inject } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { AddFiscalPeriodFormComponent } from "../add-fiscal-period-form/add-fiscal-period-form.component";
import { MatButtonModule } from '@angular/material/button';
import { ExternalSubmitDirective } from '../../../../directives/external-submit.directive';

@Component({
  selector: 'app-add-fiscal-period-dialog',
  imports: [MatDialogModule, AddFiscalPeriodFormComponent, MatButtonModule, ExternalSubmitDirective],
  templateUrl: './add-fiscal-period-dialog.component.html',
  styleUrl: './add-fiscal-period-dialog.component.css'
})
export class AddFiscalPeriodDialogComponent {
  private dialogRef = inject(MatDialogRef<AddFiscalPeriodDialogComponent>);
  
  close() {
    this.dialogRef.close(true);
  }
}
