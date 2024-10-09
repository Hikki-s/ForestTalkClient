import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-user-post",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./user-post.component.html",
  styleUrl: "./user-post.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPostComponent {}
