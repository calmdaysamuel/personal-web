import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from 'src/pages/article/article.component';
import { BlogPageComponent } from 'src/pages/blog-page/blog-page.component';
import { ContactPageComponent } from 'src/pages/contact-page/contact-page.component';
import { ErrorPageComponent } from 'src/pages/error-page/error-page.component';
import { ResumePageComponent } from 'src/pages/resume-page/resume-page.component';

const routes: Routes = [
  { path: '', component: ResumePageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'projects', component: ContactPageComponent },
  { path: 'blog', component: BlogPageComponent },
  { path: 'blog/:hash', component: ArticleComponent },
  { path: '404', component: ErrorPageComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
