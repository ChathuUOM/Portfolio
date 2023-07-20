import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadMyFile(){
    const link = document.createElement('a');
    link.setAttribute('target', '_self');
    link.setAttribute('href', '../../../assets/resume/Chathurika-Wijekoon_Senior_UI-UX_Engineer.pdf');
    link.setAttribute('download', `Chathurika Wijekoon - Senior UI-UX Engineer.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
}

}
