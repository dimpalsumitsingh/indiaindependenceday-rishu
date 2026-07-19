import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { LanguageService } from '../../core/services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent implements OnInit, OnDestroy {
  events: any[] = [];
  t: any = {};
  private langSub: Subscription;
  private transSub: Subscription;

  constructor(private http: HttpClient, public langService: LanguageService) {
    this.transSub = this.langService.translations$.subscribe(t => this.t = t);
    this.langSub = this.langService.currentLang$.subscribe(() => this.loadData());
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.langSub.unsubscribe();
    this.transSub.unsubscribe();
  }

  private loadData(): void {
    const path = this.langService.getDataPath('events');
    this.http.get<any[]>(path).subscribe(data => {
      this.events = data;
    });
  }
}
