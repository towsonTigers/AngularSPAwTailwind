import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-gray-800 text-white text-center py-3 text-sm">
      Version 1.0.0

      <button (click)="toggleTheme()">
        <span class="material-symbols-rounded">
          {{ themeService.isDark() ? 'light_mode' : 'dark_mode' }}
        </span>
      </button>

    </footer>
  `
})

export class FooterComponent {
  constructor(public themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}