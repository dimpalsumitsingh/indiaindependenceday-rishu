import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { LanguageService } from '../../core/services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent implements OnInit, OnDestroy {
  timelineEvents: any[] = [];
  private langSub: Subscription;

  constructor(private http: HttpClient, public langService: LanguageService) {
    this.langSub = this.langService.currentLang$.subscribe(() => this.loadData());
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.langSub.unsubscribe();
  }

  private loadData(): void {
    const path = this.langService.getDataPath('timeline');
    this.http.get<any[]>(path).subscribe(data => {
      this.timelineEvents = data;
    });
  }

  get timelineData() {
    return this.timelineEvents;
  }

  expandedIndex: number | null = null;

  toggleExpand(index: number) {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }
}
