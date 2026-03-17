import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  isDark = signal(false);

  constructor() {
    const saved = localStorage.getItem('theme');
    const dark = saved === 'dark';
    this.isDark.set(dark);

    if (dark) document.documentElement.classList.add('dark');
  }

  toggleTheme() {
    const newValue = !this.isDark();
    this.isDark.set(newValue);

    document.documentElement.classList.toggle('dark', newValue);
    localStorage.setItem('theme', newValue ? 'dark' : 'light');
  }
}
