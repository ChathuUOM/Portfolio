import { AfterViewInit, Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-testomonials',
  templateUrl: './testomonials.component.html',
  styleUrls: ['./testomonials.component.scss']
})
export class TestomonialsComponent  implements AfterViewInit {

  ngAfterViewInit() {
    new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    });
  }

}
