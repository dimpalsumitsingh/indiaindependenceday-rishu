import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from '../../components/timeline/timeline.component';
import { LanguageService } from '../../core/services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-timeline-page',
  standalone: true,
  imports: [CommonModule, TimelineComponent],
  templateUrl: './timeline-page.component.html',
  styleUrl: './timeline-page.component.scss'
})
export class TimelinePageComponent implements OnDestroy {
  t: any = {};
  private sub: Subscription;

  constructor(public langService: LanguageService) {
    this.sub = this.langService.translations$.subscribe(t => this.t = t);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
