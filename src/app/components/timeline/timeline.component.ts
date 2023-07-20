import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements AfterViewInit {
  @ViewChild('timeline') timeline: ElementRef<HTMLElement> | undefined;

  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit() {
    this.route.fragment.subscribe((fragments) => {
      if (fragments == 'timeline') {
        this.scrollToTimeline();
      }
    });
  }

  scrollToTimeline() {
    this.timeline?.nativeElement.scrollIntoView();
  }
}
