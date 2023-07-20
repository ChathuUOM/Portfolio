import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TestomonialsComponent } from './components/testomonials/testomonials.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ServicesComponent } from './components/services/services.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestomonialsComponent,
    TimelineComponent,
    SkillsComponent,
    ServicesComponent,
    NavBarComponent,
    ContactComponent,
    ProjectsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
