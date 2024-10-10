import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class StorageService {
  setItem(key: string, value: any, useSessionStorage: boolean = false): void {
    const storage = useSessionStorage ? sessionStorage : localStorage;
    storage.setItem(key, JSON.stringify(value));
  }

  getItem<T>(key: string, useSessionStorage: boolean = false): T | null {
    const storage = useSessionStorage ? sessionStorage : localStorage;
    const value = storage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  removeItem(key: string, useSessionStorage: boolean = false): void {
    const storage = useSessionStorage ? sessionStorage : localStorage;
    storage.removeItem(key);
  }

  clear(useSessionStorage: boolean = false): void {
    const storage = useSessionStorage ? sessionStorage : localStorage;
    storage.clear();
  }

  hasItem(key: string, useSessionStorage: boolean = false): boolean {
    const storage = useSessionStorage ? sessionStorage : localStorage;
    return !!storage.getItem(key);
  }
}
