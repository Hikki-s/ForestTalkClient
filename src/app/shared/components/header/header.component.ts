import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  ViewEncapsulation,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { TuiIconModule } from "@taiga-ui/experimental";
import {
  LucideAngularModule,
  ChevronDown,
  User,
  Bell,
  LogOut,
  Settings,
} from "lucide-angular";
import { TuiInputModule } from "@taiga-ui/kit";
import {
  TuiDropdownModule,
  TuiLinkModule,
  TuiTextfieldControllerModule,
} from "@taiga-ui/core";
import { TuiActiveZoneModule, TuiObscuredModule } from "@taiga-ui/cdk";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [
    CommonModule,
    TuiIconModule,
    LucideAngularModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiDropdownModule,
    TuiActiveZoneModule,
    TuiObscuredModule,
    RouterLink,
    TuiLinkModule,
  ],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.less",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly avatarUrl: string | null = localStorage.getItem("userAvatarUrl");
  readonly userFullName: string | null = localStorage.getItem("userFullName");

  protected readonly ChevronDown = ChevronDown;
  protected readonly User = User;
  protected readonly Bell = Bell;
  protected readonly LogOut = LogOut;
  protected readonly Settings = Settings;

  private readonly cdr = inject(ChangeDetectorRef);

  isDropdownOpen = false;

  onObscured(obscured: boolean): void {
    if (obscured) {
      this.isDropdownOpen = false;
      this.cdr.markForCheck();
    }
  }

  onActiveZone(active: boolean): void {
    this.isDropdownOpen = active && this.isDropdownOpen;
    this.cdr.markForCheck();
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
    this.cdr.markForCheck();
  }
}
