import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-gray-800 text-white text-center py-3 text-sm">
      Version 1.0.0
    </footer>
  `
})
export class FooterComponent {}