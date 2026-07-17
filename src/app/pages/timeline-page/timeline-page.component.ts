import { Component } from '@angular/core';
import { TimelineComponent } from '../../components/timeline/timeline.component';

@Component({
  selector: 'app-timeline-page',
  standalone: true,
  imports: [TimelineComponent],
  templateUrl: './timeline-page.component.html',
  styleUrl: './timeline-page.component.scss'
})
export class TimelinePageComponent {

}
