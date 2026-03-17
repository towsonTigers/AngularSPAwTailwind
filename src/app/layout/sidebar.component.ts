import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MenuItem {
  label: string;
  icon: string;
  children?: string[];
  open?: boolean;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  collapsed = false;

  menu: MenuItem[] = [
    { label: 'Dashboard', icon: 'dashboard' },
    {
      label: 'Services',
      icon: 'calendar_today',
      children: ['IT Consulting', 'Cloud Solutions', 'Mobile Apps']
    },
    { label: 'Notifications', icon: 'notifications' },
    { label: 'Resources', icon: 'local_library' },
    {
      label: 'Bookmarks',
      icon: 'star',
      children: ['Saved Tutorials', 'Favorite Blogs', 'Resource Guides']
    },
    { label: 'Extensions', icon: 'extension' },
    { label: 'Settings', icon: 'settings' }
  ];

  toggleSidebar() {
    this.collapsed = !this.collapsed;
    this.closeAllDropdowns();
  }

  toggleDropdown(item: MenuItem) {
    const isOpen = item.open;

    this.closeAllDropdowns();
    item.open = !isOpen;
  }

  closeAllDropdowns() {
    this.menu.forEach(item => item.open = false);
  }
}