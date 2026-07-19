import { Component, OnDestroy } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { LanguageService } from '../../core/services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnDestroy {
  t: any = {};
  private sub: Subscription;

  constructor(public langService: LanguageService) {
    this.sub = this.langService.translations$.subscribe(t => this.t = t);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
