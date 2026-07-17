import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  @ViewChild('bgMusic') bgMusic!: ElementRef<HTMLAudioElement>;
  isPlaying = false;

  toggleMusic() {
    if (this.isPlaying) {
      this.bgMusic.nativeElement.pause();
    } else {
      this.bgMusic.nativeElement.play();
    }
    this.isPlaying = !this.isPlaying;
  }
}
