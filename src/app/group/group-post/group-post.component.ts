import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-group-post",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./group-post.component.html",
  styleUrl: "./group-post.component.less",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupPostComponent {}
