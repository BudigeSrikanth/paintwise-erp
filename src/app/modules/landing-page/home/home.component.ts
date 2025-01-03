import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private meta: Meta, private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Welcome to PaintWise ERP');
    this.meta.addTags([
      { name: 'description', content: 'PaintWise ERP helps manage painting contracts efficiently.' },
      { name: 'keywords', content: 'PaintWise, ERP, Painting, Management' },
      { name: 'author', content: 'PaintWise Team' },
    ]);
  }
}
