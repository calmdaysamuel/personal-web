import { Component, OnInit } from '@angular/core';
import { ArticleCard } from 'src/data_models/models';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss'],
})
export class BlogPageComponent implements OnInit {
  sectionTitle: String = 'RECENT ARTICLES';
  articles: ArticleCard[] = [
    {
      articleHash: 'sasd',
      title: 'The World of CSS Transforms',
      summary: `The “transform” property is such a powerful part of the CSS language! In this blog post, we'll take a deep look at this property and see some of the nifty things it can do.`,
      date: '12th May, 2021',
    },
    {
      articleHash: 'sasd1',
      title: 'The World of CSS Transforms',
      summary: `The “transform” property is such a powerful part of the CSS language! In this blog post, we'll take a deep look at this property and see some of the nifty things it can do.`,
      date: '12th May, 2021',
    },
    {
      articleHash: 'sasd2',
      title: 'The World of CSS Transforms',
      summary: `The “transform” property is such a powerful part of the CSS language! In this blog post, we'll take a deep look at this property and see some of the nifty things it can do.`,
      date: '12th May, 2021',
    },
    {
      articleHash: 'sasd3',
      title: 'The World of CSS Transforms',
      summary: `The “transform” property is such a powerful part of the CSS language! In this blog post, we'll take a deep look at this property and see some of the nifty things it can do.`,
      date: '12th May, 2021',
    },
  ];

  popularArticles: ArticleCard[] = [
    {
      articleHash: 'sasd',
      title: 'The World of CSS Transforms',
      summary: `The “transform” property is such a powerful part of the CSS language! In this blog post, we'll take a deep look at this property and see some of the nifty things it can do.`,
      date: '12th May, 2021',
    },
    {
      articleHash: 'sasd1',
      title: 'The World of CSS Transforms',
      summary: `The “transform” property is such a powerful part of the CSS language! In this blog post, we'll take a deep look at this property and see some of the nifty things it can do.`,
      date: '12th May, 2021',
    },
    {
      articleHash: 'sasd2',
      title: 'The World of CSS Transforms',
      summary: `The “transform” property is such a powerful part of the CSS language! In this blog post, we'll take a deep look at this property and see some of the nifty things it can do.`,
      date: '12th May, 2021',
    },
    {
      articleHash: 'sasd3',
      title: 'The World of CSS Transforms',
      summary: `The “transform” property is such a powerful part of the CSS language! In this blog post, we'll take a deep look at this property and see some of the nifty things it can do.`,
      date: '12th May, 2021',
    },
  ];

  topCategories: String[] = [
    'All',
    'Tech',
    'CSS',
    'JavaScript',
    'SoftwareEngineering',
    'Flutter',
    'Bots',
    'Tech',
  ];
  constructor() {}

  ngOnInit() {}
}
