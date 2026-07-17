import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent implements OnInit {
  questions: any[] = [];
  currentQuestion = 0;
  score = 0;
  showScore = false;
  selectedOption: number | null = null;
  isAnswered = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('assets/data/quiz.json').subscribe(data => {
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
