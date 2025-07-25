import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ReportingMenuComponent } from '../reporting/components/reporting-menu/reporting-menu.component';
import { TrialBalanceTableComponent } from '../reporting/statements/trial-balance/components/trial-balance-table/trial-balance-table.component';

@Component({
  selector: 'app-home-page',
  imports: [MatButtonModule, TrialBalanceTableComponent, ReportingMenuComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
