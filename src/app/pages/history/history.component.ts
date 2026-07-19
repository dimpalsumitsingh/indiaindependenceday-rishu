import { Component, OnDestroy } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent implements OnDestroy {
  t: any = {};
  private sub: Subscription;

  constructor(public langService: LanguageService) {
    this.sub = this.langService.translations$.subscribe(t => this.t = t);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
