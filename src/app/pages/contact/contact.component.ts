import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../core/services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnDestroy {
  isSubmitted = false;
  t: any = {};
  private sub: Subscription;

  constructor(public langService: LanguageService) {
    this.sub = this.langService.translations$.subscribe(t => this.t = t);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onSubmit(event: Event) {
    event.preventDefault();
    
    const submitBtn = (event.target as HTMLFormElement).querySelector('button[type="submit"]');
    if (submitBtn) {
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> ${this.t?.contact?.sending || 'Sending...'}`;
      
      setTimeout(() => {
        this.isSubmitted = true;
        submitBtn.innerHTML = originalText;
        (event.target as HTMLFormElement).reset();
        
        setTimeout(() => {
          this.isSubmitted = false;
        }, 5000);
      }, 1500);
    }
  }
}
