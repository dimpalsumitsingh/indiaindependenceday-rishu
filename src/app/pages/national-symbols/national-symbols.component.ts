import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../core/services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-national-symbols',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './national-symbols.component.html',
  styleUrl: './national-symbols.component.scss'
})
export class NationalSymbolsComponent implements OnInit, OnDestroy {
  t: any = {};
  private langSub!: Subscription;

  constructor(public langService: LanguageService) {}

  ngOnInit(): void {
    this.langSub = this.langService.translations$.subscribe(t => this.t = t);
  }

  ngOnDestroy(): void {
    if (this.langSub) this.langSub.unsubscribe();
  }
}
