import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../core/services/language.service';
import { AudioService } from '../../core/services/audio.service';
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

  // Audio playback state
  currentlyPlaying: 'anthem' | 'song' | null = null;
  private anthemAudio = new Audio('assets/audio/jana_gana_mana.mp3');
  private songAudio = new Audio('assets/audio/vande_matram_full.mp3');
  anthemProgress = 0;
  songProgress = 0;
  private animFrameId: number | null = null;
  private wasBgMusicPlaying = false;

  constructor(
    public langService: LanguageService,
    private audioService: AudioService
  ) { }

  ngOnInit(): void {
    this.langSub = this.langService.translations$.subscribe(t => this.t = t);

    // When anthem ends, reset state
    this.anthemAudio.addEventListener('ended', () => {
      this.currentlyPlaying = null;
      this.anthemProgress = 0;
      this.resumeBgMusicIfNeeded();
    });

    // When song ends, reset state
    this.songAudio.addEventListener('ended', () => {
      this.currentlyPlaying = null;
      this.songProgress = 0;
      this.resumeBgMusicIfNeeded();
    });

    this.startProgressLoop();
  }

  ngOnDestroy(): void {
    if (this.langSub) this.langSub.unsubscribe();
    this.anthemAudio.pause();
    this.songAudio.pause();
    this.anthemAudio.currentTime = 0;
    this.songAudio.currentTime = 0;
    if (this.animFrameId !== null) {
      cancelAnimationFrame(this.animFrameId);
    }
    this.resumeBgMusicIfNeeded();
  }

  togglePlay(type: 'anthem' | 'song'): void {
    if (this.currentlyPlaying === type) {
      // Pause the currently playing audio
      this.getAudio(type).pause();
      this.currentlyPlaying = null;
      this.resumeBgMusicIfNeeded();
    } else {
      // Stop the other audio if playing
      if (this.currentlyPlaying) {
        const otherAudio = this.getAudio(this.currentlyPlaying);
        otherAudio.pause();
        otherAudio.currentTime = 0;
        if (this.currentlyPlaying === 'anthem') this.anthemProgress = 0;
        else this.songProgress = 0;
      }

      // Pause background music
      this.pauseBgMusic();

      // Play the selected audio
      const audio = this.getAudio(type);
      audio.play().then(() => {
        this.currentlyPlaying = type;
      }).catch(err => console.error('Error playing audio:', err));
    }
  }

  private getAudio(type: 'anthem' | 'song'): HTMLAudioElement {
    return type === 'anthem' ? this.anthemAudio : this.songAudio;
  }

  private startProgressLoop(): void {
    const update = () => {
      if (this.anthemAudio.duration) {
        this.anthemProgress = (this.anthemAudio.currentTime / this.anthemAudio.duration) * 100;
      }
      if (this.songAudio.duration) {
        this.songProgress = (this.songAudio.currentTime / this.songAudio.duration) * 100;
      }
      this.animFrameId = requestAnimationFrame(update);
    };
    this.animFrameId = requestAnimationFrame(update);
  }

  private pauseBgMusic(): void {
    // Check if background music is currently playing via the service
    this.audioService.isPlaying$.subscribe(playing => {
      this.wasBgMusicPlaying = playing;
    }).unsubscribe();

    if (this.wasBgMusicPlaying) {
      this.audioService.toggleAudio(); // Pause it
    }
  }

  private resumeBgMusicIfNeeded(): void {
    if (this.wasBgMusicPlaying && !this.currentlyPlaying) {
      this.audioService.toggleAudio(); // Resume it
      this.wasBgMusicPlaying = false;
    }
  }
}
