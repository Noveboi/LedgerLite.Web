import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogoComponent } from "../../components/logo/logo.component";

@Component({
  selector: 'app-anonymous-layout',
  imports: [RouterOutlet, LogoComponent],
  templateUrl: './anonymous-layout.component.html',
  styleUrl: './anonymous-layout.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AnonymousLayoutComponent {

}
