import { Component } from '@angular/core';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.scss'
})
export class ClientListComponent {
  clients = [
    { id: 1, name: 'John Doe', contact: '1234567890', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', contact: '9876543210', email: 'jane@example.com' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
