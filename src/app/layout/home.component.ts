import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <h1 class="text-3xl font-bold text-gray-800  dark:text-blue-800">
      hello world!
    </h1>
    <h1 class="px-6 py-4 text-2xl font-bold shadow
         bg-gray-800 text-white
         dark:bg-gray-200 dark:text-gray-900">
         fooBar </h1>
  `
})
export class HomeComponent {}