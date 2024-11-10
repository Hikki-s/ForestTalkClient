import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TuiInputModule } from "@taiga-ui/kit";
import { ReactiveFormsModule, FormControl, FormGroup } from "@angular/forms";
import { TuiButtonModule, TuiTextfieldControllerModule } from "@taiga-ui/core";
import {
  SIDEBAR_SECTIONS,
  USER_SETTINGS_GENERAL_FIELDS,
} from "@shared/constants/userSettingsConstants";

@Component({
  selector: "app-user-settings",
  standalone: true,
  imports: [
    CommonModule,
    TuiInputModule,
    ReactiveFormsModule,
    TuiTextfieldControllerModule,
    TuiButtonModule,
  ],
  templateUrl: "./user-settings.component.html",
  styleUrls: ["./user-settings.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSettingsComponent {
  // Форма пользователя для раздела "Общее"
  readonly userForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),
    phone: new FormControl(""),
    birthDate: new FormControl(""),
    workPlace: new FormControl(""),
    residence: new FormControl(""),
    language: new FormControl(""),
  });

  fields = USER_SETTINGS_GENERAL_FIELDS;
  sections = SIDEBAR_SECTIONS;

  selectedSection = this.sections[0].name;

  selectSection(section: { name: string; label: string }) {
    // Блокируем временно переход для "education" и "interests"
    if (section.name !== "education" && section.name !== "interests") {
      this.selectedSection = section.name;
    }
  }

  getSelectedSectionLabel(): string {
    const section = this.sections.find((s) => s.name === this.selectedSection);
    return section ? section.label : "";
  }

  isDisabledSection(sectionName: string): boolean {
    return sectionName === "education" || sectionName === "interests";
  }
}
