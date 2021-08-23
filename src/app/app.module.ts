import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ArticleComponent } from 'src/pages/article/article.component';
import { BlogPageComponent } from 'src/pages/blog-page/blog-page.component';
import { ContactPageComponent } from 'src/pages/contact-page/contact-page.component';
import { ErrorPageComponent } from 'src/pages/error-page/error-page.component';
import { HomePageComponent } from 'src/pages/home-page/home-page.component';
import { ResumePageComponent } from 'src/pages/resume-page/resume-page.component';
import { AppLogoComponent } from 'src/shared_components/app-logo/app-logo.component';
import { FooterComponent } from 'src/shared_components/footer/footer.component';
import { NavBarComponent } from 'src/shared_components/nav-bar/nav-bar.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RightArrowSvgComponent } from 'src/shared_components/right-arrow-svg/right-arrow-svg.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    FooterComponent,
    ResumePageComponent,
    AppLogoComponent,
    ContactPageComponent,
    ArticleComponent,
    BlogPageComponent,
    ErrorPageComponent,
    RightArrowSvgComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
