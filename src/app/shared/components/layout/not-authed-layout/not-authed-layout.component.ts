import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-layout",
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: "./not-authed-layout.component.html",
  styleUrl: "./not-authed-layout.component.less",
})
export class NotAuthedLayoutComponent {}
