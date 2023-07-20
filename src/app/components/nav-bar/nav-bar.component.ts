import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {}

  navigateToSection(section: string) {
    if (section == 'skills') {
      const skillsSectionRef = document.getElementById('skillsSection');
      if (skillsSectionRef) {
        this.viewportScroller.scrollToAnchor('skillsSection');
      }
    } else if (section == 'services') {
      const servicesSectionRef = document.getElementById('servicesSection');
      if (servicesSectionRef) {
        this.viewportScroller.scrollToAnchor('servicesSection');
      }
    } else if (section == 'timeline') {
      const timelineSectionRef = document.getElementById('timelineSection');
      if (timelineSectionRef) {
        this.viewportScroller.scrollToAnchor('timelineSection');
      }
    } else if (section == 'testimonials') {
      const testimonialsSectionRef = document.getElementById(
        'testimonialsSection'
      );
      if (testimonialsSectionRef) {
        this.viewportScroller.scrollToAnchor('testimonialsSection');
      }
    } else if (section == 'projects') {
      const projectsSectionRef = document.getElementById('projectsSection');
      if (projectsSectionRef) {
        this.viewportScroller.scrollToAnchor('projectsSection');
      }
    } else if (section == 'contact') {
      const contactSectionRef = document.getElementById('contactSection');
      if (contactSectionRef) {
        this.viewportScroller.scrollToAnchor('contactSection');
      }
    }
  }
}
