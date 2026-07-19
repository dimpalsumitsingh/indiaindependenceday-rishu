import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgxParticlesModule, NgParticlesService } from '@tsparticles/angular';
import { Engine } from '@tsparticles/engine';
import { loadFull } from 'tsparticles';
import { AudioService } from './core/services/audio.service';
import { LanguageService } from './core/services/language.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, NgxParticlesModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'independence-day-app';
  t: any = {};
  private sub!: Subscription;
  private routerSub!: Subscription;
  private hasInteracted = false;
  private lastHoveredElement: Element | null = null;

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
        onClick: { enable: true, mode: 'push' },
        onHover: { enable: true, mode: 'repulse' },
        resize: { enable: true, } as any,
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      color: { value: ['#FF9933', '#FFFFFF', '#138808'] },
      links: { enable: false },
      move: {
        direction: 'bottom' as const,
        enable: true,
        outModes: { default: 'out' as const },
        random: false,
        speed: 2,
        straight: false,
      },
      number: { density: { enable: true }, value: 50 },
      opacity: { value: 0.8 },
      shape: { type: ['circle', 'star'] },
      size: { value: { min: 2, max: 5 } },
    },
    detectRetina: true,
  };

  constructor(
    private readonly ngParticlesService: NgParticlesService,
    public readonly audioService: AudioService,
    public langService: LanguageService,
    private router: Router
  ) {
    this.sub = this.langService.translations$.subscribe(t => this.t = t);
    
    // Scroll to top on every route change
    this.routerSub = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      setTimeout(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }, 0);
    });
  }

  ngOnInit(): void {
    void this.ngParticlesService.init(async (engine: Engine) => {
      await loadFull(engine);
    });
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
    if (this.routerSub) this.routerSub.unsubscribe();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.hasInteracted) {
      this.hasInteracted = true;
      this.audioService.playClickSound(); // Initialize audio context
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
