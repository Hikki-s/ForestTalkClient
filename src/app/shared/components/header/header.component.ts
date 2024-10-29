import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  ViewChild,
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
import { TuiInputComponent, TuiInputModule } from "@taiga-ui/kit";
import {
  TuiDropdownModule,
  TuiLinkModule,
  TuiTextfieldControllerModule,
} from "@taiga-ui/core";
import { TuiActiveZoneModule, TuiObscuredModule } from "@taiga-ui/cdk";
import { Router, RouterLink } from "@angular/router";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";

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
    FormsModule,
    ReactiveFormsModule,
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
  private readonly router = inject(Router);

  @ViewChild("searchInput") searchInputRef!: TuiInputComponent;

  isDropdownOpen = false;
  searchControl = new FormControl("");

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

  onSearch(): void {
    const searchQuery = this.searchControl.value?.trim();

    if (searchQuery) {
      this.router.navigate(["/search"], {
        queryParams: { q: searchQuery },
      });
    } else {
      this.router.navigate(["/search"]);
    }

    this.searchControl.reset();
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
    this.cdr.markForCheck();
  }
}
