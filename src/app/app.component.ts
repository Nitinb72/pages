import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 0;

  images = [
    {
      title: 'BEACHES',
      imageUrl:
        'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2hlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'NATURE',
      imageUrl:
        'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'KING LION',
      imageUrl:
        'https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YW5pbWFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'RELAX',
      imageUrl:
        'https://images.unsplash.com/photo-1481833761820-0509d3217039?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'CHRISTMAS',
      imageUrl:
        'https://images.unsplash.com/photo-1615097130643-12caeab3c625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNocmlzbWFzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'AESTHETICS',
      imageUrl:
        'https://images.unsplash.com/photo-1601045503826-9a58b51f78bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fEFlc3RoZXRpY3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'CLOUDS',
      imageUrl:
        'https://images.unsplash.com/photo-1495933925743-bb94d1d4ea4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fENsb3Vkc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'HOTELS',
      imageUrl:
        'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'GUITAR',
      imageUrl:
        'https://images.unsplash.com/photo-1465225314224-587cd83d322b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'PATTERNS',
      imageUrl:
        'https://images.unsplash.com/flagged/photo-1579268351234-073f85929562?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGF0dGVybnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
  ];

  showNav(i: number) {
    return Math.abs(this.currentPage - i) < 5;
  }
}
