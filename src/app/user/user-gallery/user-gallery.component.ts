import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-user-gallery",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./user-gallery.component.html",
  styleUrl: "./user-gallery.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserGalleryComponent {}
