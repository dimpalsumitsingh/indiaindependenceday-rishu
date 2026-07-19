import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { LanguageService } from '../../core/services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit, OnDestroy {
  galleryItems: any[] = [];
  categories: string[] = ['All'];
  selectedCategory = 'All';
  private langSub: Subscription;

  constructor(private http: HttpClient, public langService: LanguageService) {
    this.langSub = this.langService.currentLang$.subscribe(() => this.loadData());
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.langSub.unsubscribe();
  }

  private loadData(): void {
    const path = this.langService.getDataPath('gallery');
    this.http.get<any[]>(path).subscribe(data => {
      this.galleryItems = data;
      // Re-extract categories for the current language
      const uniqueCategories = new Set(data.map(item => item.category));
      
      // Update 'All' label based on language
      const allLabel = this.langService.currentLang === 'hi' ? 'सभी' : 'All';
      this.categories = [allLabel, ...Array.from(uniqueCategories)];
      this.selectedCategory = allLabel;
    });
  }

  filterGallery(category: string) {
    this.selectedCategory = category;
  }

  get filteredItems() {
    const allLabel = this.langService.currentLang === 'hi' ? 'सभी' : 'All';
    if (this.selectedCategory === allLabel) {
      return this.galleryItems;
    }
    return this.galleryItems.filter(item => item.category === this.selectedCategory);
  }

  get images() {
    return this.filteredItems;
  }

  selectedImage: any = null;

  openLightbox(img: any) {
    this.selectedImage = img;
  }

  closeLightbox() {
    this.selectedImage = null;
  }
}
