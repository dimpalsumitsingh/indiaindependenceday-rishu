import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private audio = new Audio();
  private audioCtx?: AudioContext;
  
  private isPlayingSubject = new BehaviorSubject<boolean>(false);
  isPlaying$ = this.isPlayingSubject.asObservable();
  
  private volumeSubject = new BehaviorSubject<number>(0.5);
  volume$ = this.volumeSubject.asObservable();
  
  private isMutedSubject = new BehaviorSubject<boolean>(false);
  isMuted$ = this.isMutedSubject.asObservable();

  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    if (this.isBrowser) {
      // Initialize Web Audio API
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }

      this.audio.src = 'assets/audio/ae_watan.mp4';
      this.audio.loop = true;

      // Load preferences
      const savedVolume = localStorage.getItem('audioVolume');
      const savedMute = localStorage.getItem('audioMuted');
      const savedPlaying = localStorage.getItem('audioPlaying');

      if (savedVolume !== null) {
        this.volumeSubject.next(parseFloat(savedVolume));
      }
      if (savedMute !== null) {
        this.isMutedSubject.next(savedMute === 'true');
      }

      this.audio.volume = this.volumeSubject.value;
      this.audio.muted = this.isMutedSubject.value;
      
      // Try autoplaying on load if it was playing before and not muted
      if (savedPlaying !== 'false' && !this.audio.muted) {
        this.audio.play().then(() => {
          this.isPlayingSubject.next(true);
        }).catch(() => {
          this.isPlayingSubject.next(false);
        });
      }
    }
  }

  toggleAudio() {
    if (!this.isBrowser) return;

    if (this.audio.paused) {
      this.audio.play().then(() => {
        this.isPlayingSubject.next(true);
        localStorage.setItem('audioPlaying', 'true');
        if (this.isMutedSubject.value) this.toggleMute();
      }).catch(err => console.error('Error playing audio:', err));
    } else {
      this.audio.pause();
      this.isPlayingSubject.next(false);
      localStorage.setItem('audioPlaying', 'false');
    }
  }

  playAudio() {
    if (!this.isBrowser) return;
    
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    if (this.audio.paused && !this.isMutedSubject.value && localStorage.getItem('audioPlaying') !== 'false') {
      this.audio.play().then(() => {
        this.isPlayingSubject.next(true);
        localStorage.setItem('audioPlaying', 'true');
      }).catch(err => console.error('Error playing audio:', err));
    }
  }

  setVolume(volume: number) {
    if (!this.isBrowser) return;
    this.audio.volume = volume;
    this.volumeSubject.next(volume);
    localStorage.setItem('audioVolume', volume.toString());
  }

  toggleMute() {
    if (!this.isBrowser) return;
    const newMutedState = !this.isMutedSubject.value;
    this.audio.muted = newMutedState;
    this.isMutedSubject.next(newMutedState);
    localStorage.setItem('audioMuted', newMutedState.toString());
    
    if (newMutedState) {
      this.audio.pause();
      this.isPlayingSubject.next(false);
    } else if (localStorage.getItem('audioPlaying') !== 'false') {
      this.playAudio();
    }
  }

  playClickSound() {
    if (!this.isBrowser || !this.audioCtx || this.isMutedSubject.value) return;
    if (this.audioCtx.state === 'suspended') this.audioCtx.resume();
    
    const osc = this.audioCtx.createOscillator();
    const gainNode = this.audioCtx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, this.audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, this.audioCtx.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(this.volumeSubject.value * 0.3, this.audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioCtx.currentTime + 0.1);
    
    osc.connect(gainNode);
    gainNode.connect(this.audioCtx.destination);
    
    osc.start();
    osc.stop(this.audioCtx.currentTime + 0.1);
  }

  playHoverSound() {
    if (!this.isBrowser || !this.audioCtx || this.isMutedSubject.value) return;
    if (this.audioCtx.state === 'suspended') this.audioCtx.resume();
    
    const osc = this.audioCtx.createOscillator();
    const gainNode = this.audioCtx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(400, this.audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(600, this.audioCtx.currentTime + 0.05);
    
    gainNode.gain.setValueAtTime(this.volumeSubject.value * 0.1, this.audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioCtx.currentTime + 0.05);
    
    osc.connect(gainNode);
    gainNode.connect(this.audioCtx.destination);
    
    osc.start();
    osc.stop(this.audioCtx.currentTime + 0.05);
  }
}
