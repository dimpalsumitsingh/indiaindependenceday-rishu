import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { LanguageService } from '../../core/services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gallery-page',
  standalone: true,
  imports: [CommonModule, GalleryComponent],
  templateUrl: './gallery-page.component.html',
  styleUrl: './gallery-page.component.scss'
})
export class GalleryPageComponent implements OnDestroy {
  t: any = {};
  private sub: Subscription;

  constructor(public langService: LanguageService) {
    this.sub = this.langService.translations$.subscribe(t => this.t = t);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
