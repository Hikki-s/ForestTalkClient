import type { PipeTransform } from "@angular/core";
import { Pipe } from "@angular/core";

@Pipe({
  name: "timeAgo",
  standalone: true,
})
export class TimeAgoPipe implements PipeTransform {
  transform(createdAt: string): string {
    const createdDate = new Date(createdAt);
    const now = new Date();
    const diff = now.getTime() - createdDate.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);

    if (minutes < 60) {
      return this.formatMinutes(minutes);
    }
    if (hours < 12) {
      return this.formatHours(hours);
    }
    if (this.isToday(createdDate)) {
      return `Сегодня в ${this.formatTime(createdDate)}`;
    }
    if (this.isYesterday(createdDate)) {
      return `Вчера в ${this.formatTime(createdDate)}`;
    }
    return `${this.formatDate(createdDate)} в ${this.formatTime(createdDate)}`;
  }

  private formatMinutes(minutes: number): string {
    if (minutes === 1) {
      return "1 минуту назад";
    }
    if (minutes < 5) {
      return `${minutes} минуты назад`;
    }
    return `${minutes} минут назад`;
  }

  private formatHours(hours: number): string {
    if (hours === 1) {
      return "1 час назад";
    }
    if (hours < 5) {
      return `${hours} часа назад`;
    }
    return `${hours} часов назад`;
  }

  private formatTime(date: Date): string {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }

  private formatDate(date: Date): string {
    return date
      .toLocaleDateString("ru-RU", { day: "numeric", month: "short" })
      .replace(/\.$/, "");
  }

  private isToday(date: Date): boolean {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }

  private isYesterday(date: Date): boolean {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return (
      date.getDate() === yesterday.getDate() &&
      date.getMonth() === yesterday.getMonth() &&
      date.getFullYear() === yesterday.getFullYear()
    );
  }
}
