import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export type Language = 'hi' | 'en';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private langSubject: BehaviorSubject<Language>;
  readonly currentLang$: Observable<Language>;

  private translationsSubject = new BehaviorSubject<any>({});
  readonly translations$ = this.translationsSubject.asObservable();

  private translationsCache: { [key: string]: any } = {};

  constructor(private http: HttpClient) {
    const savedLang = (typeof localStorage !== 'undefined' && localStorage.getItem('app-lang') as Language) || 'hi';
    this.langSubject = new BehaviorSubject<Language>(savedLang);
    this.currentLang$ = this.langSubject.asObservable();
    this.loadTranslations(savedLang);
  }

  get currentLang(): Language {
    return this.langSubject.value;
  }

  get translations(): any {
    return this.translationsSubject.value;
  }

  setLanguage(lang: Language): void {
    if (lang !== this.langSubject.value) {
      this.langSubject.next(lang);
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('app-lang', lang);
      }
      this.loadTranslations(lang);
    }
  }

  toggleLanguage(): void {
    const newLang: Language = this.langSubject.value === 'hi' ? 'en' : 'hi';
    this.setLanguage(newLang);
  }

  private loadTranslations(lang: Language): void {
    if (this.translationsCache[lang]) {
      this.translationsSubject.next(this.translationsCache[lang]);
      return;
    }
    this.http.get<any>(`assets/i18n/${lang}.json`).subscribe(data => {
      this.translationsCache[lang] = data;
      this.translationsSubject.next(data);
    });
  }

  /** Helper to get the correct data file path based on language */
  getDataPath(baseName: string): string {
    const lang = this.langSubject.value;
    return lang === 'hi' ? `assets/data/${baseName}_hi.json` : `assets/data/${baseName}.json`;
  }
}
