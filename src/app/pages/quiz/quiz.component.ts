import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { LanguageService } from '../../core/services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent implements OnInit, OnDestroy {
  questions: any[] = [];
  currentQuestion = 0;
  score = 0;
  showScore = false;
  selectedOption: number | null = null;
  isAnswered = false;
  t: any = {};
  private langSub: Subscription;
  private transSub: Subscription;

  constructor(private http: HttpClient, public langService: LanguageService) {
    this.transSub = this.langService.translations$.subscribe(t => this.t = t);
    this.langSub = this.langService.currentLang$.subscribe(() => {
      this.loadData();
      this.restartQuiz();
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.langSub.unsubscribe();
    this.transSub.unsubscribe();
  }

  private loadData(): void {
    const path = this.langService.getDataPath('quiz');
    this.http.get<any[]>(path).subscribe(data => {
      this.questions = data;
    });
  }

  selectOption(index: number) {
    if (this.isAnswered) return;
    this.selectedOption = index;
    this.isAnswered = true;

    if (index === this.questions[this.currentQuestion].answer) {
      this.score++;
    }
  }

  nextQuestion() {
    if (this.currentQuestion < this.questions.length - 1) {
      this.currentQuestion++;
      this.selectedOption = null;
      this.isAnswered = false;
    } else {
      this.showScore = true;
    }
  }

  restartQuiz() {
    this.currentQuestion = 0;
    this.score = 0;
    this.showScore = false;
    this.selectedOption = null;
    this.isAnswered = false;
  }
}
