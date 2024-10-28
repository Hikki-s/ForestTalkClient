import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TuiInputModule } from '@taiga-ui/kit';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import {TuiButtonModule, TuiTextfieldControllerModule} from "@taiga-ui/core";

@Component({
  selector: "app-user-settings",
  standalone: true,
  imports: [
    CommonModule,
    TuiInputModule,
    ReactiveFormsModule,
    TuiTextfieldControllerModule,
    TuiButtonModule
  ],
  templateUrl: "./user-settings.component.html",
  styleUrls: ["./user-settings.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSettingsComponent {
  readonly userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    birthDate: new FormControl(''),
    workPlace: new FormControl(''),
    residence: new FormControl(''),
    language: new FormControl(''),
  });

  fields = [
    { label: 'Имя', controlName: 'firstName', placeholder: 'Введите имя' },
    { label: 'Фамилия', controlName: 'lastName', placeholder: 'Введите фамилию' },
    { label: 'Почта', controlName: 'email', placeholder: 'Введите почту' },
    { label: 'Телефон', controlName: 'phone', placeholder: 'Введите телефон' },
    { label: 'Дата рождения', controlName: 'birthDate', placeholder: 'Введите дату рождения' },
    { label: 'Место работы', controlName: 'workPlace', placeholder: 'Введите место работы' },
    { label: 'Место проживания', controlName: 'residence', placeholder: 'Введите место проживания' },
    { label: 'Язык', controlName: 'language', placeholder: 'Введите язык' },
  ];
}
