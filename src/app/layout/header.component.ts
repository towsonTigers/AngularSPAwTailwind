import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="bg-(--color-header-bg)
         text-(--color-header-text) px-6 py-4 text-2xl font-bold shadow">
      HERMES
    </header>
  `
})
export class HeaderComponent {}