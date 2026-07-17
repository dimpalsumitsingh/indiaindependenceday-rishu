import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-freedom-fighters',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './freedom-fighters.component.html',
  styleUrl: './freedom-fighters.component.scss'
})
export class FreedomFightersComponent implements OnInit {
  fighters: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('assets/data/fighters.json').subscribe(data => {
      this.fighters = data;
    });
  }
}
