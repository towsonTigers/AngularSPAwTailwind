import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="bg-gray-800 text-white px-6 py-4 text-2xl font-bold shadow">
      HERMES
    </header>
  `
})
export class HeaderComponent {}