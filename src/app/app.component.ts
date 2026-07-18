import { Component, OnInit, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgxParticlesModule, NgParticlesService } from '@tsparticles/angular';
import { Engine } from '@tsparticles/engine';
import { loadFull } from 'tsparticles';
import { AudioService } from './core/services/audio.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, NgxParticlesModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  id = 'tsparticles';
  particlesOptions = {
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        resize: {
          enable: true,
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: ['#FF9933', '#FFFFFF', '#138808'],
      },
      links: {
        enable: false,
      },
      move: {
        direction: 'bottom' as const,
        enable: true,
        outModes: {
          default: 'out' as const,
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 50,
      },
      opacity: {
        value: 0.8,
      },
      shape: {
        type: ['circle', 'star'],
      },
      size: {
        value: { min: 2, max: 5 },
      },
    },
    detectRetina: true,
  };

  private hasInteracted = false;

  constructor(
    private readonly ngParticlesService: NgParticlesService,
    private readonly audioService: AudioService
  ) {}

  ngOnInit(): void {
    void this.ngParticlesService.init(async (engine: Engine) => {
      await loadFull(engine);
    });
  }

  private lastHoveredElement: Element | null = null;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.hasInteracted) {
      this.hasInteracted = true;
      this.audioService.playAudio();
    }
    
    if (this.isInteractive(event.target as HTMLElement)) {
      this.audioService.playClickSound();
    }
  }

  @HostListener('document:mouseover', ['$event'])
  onDocumentMouseOver(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const interactiveElement = target.closest('a, button, input, select, textarea, [role="button"], [role="link"], .clickable, .music-toggle, .menu-toggle, .card, .glass-card');
    
    if (interactiveElement && interactiveElement !== this.lastHoveredElement) {
      this.audioService.playHoverSound();
      this.lastHoveredElement = interactiveElement;
    } else if (!interactiveElement) {
      this.lastHoveredElement = null;
    }
  }

  private isInteractive(element: HTMLElement | null): boolean {
    if (!element) return false;
    return !!element.closest('a, button, input, select, textarea, [role="button"], [role="link"], .clickable, .music-toggle, .menu-toggle, .card, .glass-card');
  }
}
