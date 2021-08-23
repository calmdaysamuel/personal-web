import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/data_models/models';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  ngOnInit(): void {}

  constructor() {}
  pageHash: String = 'asdf';
  article: Article = {
    title: 'Lorem ipsum dolor sit amet.',
    summary: '',
    tags: [],
    blocks: [
      {
        type: 'paragraph',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, cum,
      eveniet porro, quaerat tempore quae harum libero voluptatem deleniti
      architecto sunt ipsa voluptas doloribus deserunt facere ex culpa? Aperiam
      provident recusandae quia facilis qui molestiae tenetur quisquam tempora
      quo? Expedita dolorum aliquid veniam, harum vero culpa ad fuga quia neque
      dicta officiis, deserunt aut vitae quam cupiditate, laboriosam autem velit
      nemo deleniti. Magnam ipsam ullam provident necessitatibus temporibus.
      Atque veniam est dolor omnis, explicabo dolorem labore, officiis non,
      quibusdam molestias vel fugiat cumque impedit eligendi esse asperiores? Et
      libero beatae quis quibusdam officiis. Atque odio voluptatum, debitis
      quisquam iure est!`,
      },
      {
        type: 'paragraph',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, cum,
      eveniet porro, quaerat tempore quae harum libero voluptatem deleniti
      architecto sunt ipsa voluptas doloribus deserunt facere ex culpa? Aperiam
      provident recusandae quia facilis qui molestiae tenetur quisquam tempora
      quo? Expedita dolorum aliquid veniam, harum vero culpa ad fuga quia neque
      dicta officiis, deserunt aut vitae quam cupiditate, laboriosam autem velit
      nemo deleniti. Magnam ipsam ullam provident necessitatibus temporibus.
      Atque veniam est dolor omnis, explicabo dolorem labore, officiis non,
      quibusdam molestias vel fugiat cumque impedit eligendi esse asperiores? Et
      libero beatae quis quibusdam officiis. Atque odio voluptatum, debitis
      quisquam iure est!`,
      },
      {
        type: 'sub-heading',
        content: 'Lorem ipsum dolor sit amet consectetur.',
      },
      {
        type: 'paragraph',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, cum,
      eveniet porro, quaerat tempore quae harum libero voluptatem deleniti
      architecto sunt ipsa voluptas doloribus deserunt facere ex culpa? Aperiam
      provident recusandae quia facilis qui molestiae tenetur quisquam tempora
      quo? Expedita dolorum aliquid veniam, harum vero culpa ad fuga quia neque
      dicta officiis, deserunt aut vitae quam cupiditate, laboriosam autem velit
      nemo deleniti. Magnam ipsam ullam provident necessitatibus temporibus.
      Atque veniam est dolor omnis, explicabo dolorem labore, officiis non,
      quibusdam molestias vel fugiat cumque impedit eligendi esse asperiores? Et
      libero beatae quis quibusdam officiis. Atque odio voluptatum, debitis
      quisquam iure est!`,
      },
      {
        type: 'image',
        content:
          'https://images.unsplash.com/photo-1629375788263-9805588916a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80',
        desc: 'Glass Window Panel Achiteture',
      },
      {
        type: 'paragraph',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, cum,
      eveniet porro, quaerat tempore quae harum libero voluptatem deleniti
      architecto sunt ipsa voluptas doloribus deserunt facere ex culpa? Aperiam
      provident recusandae quia facilis qui molestiae tenetur quisquam tempora
      quo? Expedita dolorum aliquid veniam, harum vero culpa ad fuga quia neque
      dicta officiis, deserunt aut vitae quam cupiditate, laboriosam autem velit
      nemo deleniti. Magnam ipsam ullam provident necessitatibus temporibus.
      Atque veniam est dolor omnis, explicabo dolorem labore, officiis non,
      quibusdam molestias vel fugiat cumque impedit eligendi esse asperiores? Et
      libero beatae quis quibusdam officiis. Atque odio voluptatum, debitis
      quisquam iure est!`,
      },
      {
        type: 'paragraph',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, cum,
      eveniet porro, quaerat tempore quae harum libero voluptatem deleniti
      architecto sunt ipsa voluptas doloribus deserunt facere ex culpa? Aperiam
      provident recusandae quia facilis qui molestiae tenetur quisquam tempora
      quo? Expedita dolorum aliquid veniam, harum vero culpa ad fuga quia neque
      dicta officiis, deserunt aut vitae quam cupiditate, laboriosam autem velit
      nemo deleniti. Magnam ipsam ullam provident necessitatibus temporibus.
      Atque veniam est dolor omnis, explicabo dolorem labore, officiis non,
      quibusdam molestias vel fugiat cumque impedit eligendi esse asperiores? Et
      libero beatae quis quibusdam officiis. Atque odio voluptatum, debitis
      quisquam iure est!`,
      },
      {
        type: 'paragraph',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, cum,
      eveniet porro, quaerat tempore quae harum libero voluptatem deleniti
      architecto sunt ipsa voluptas doloribus deserunt facere ex culpa? Aperiam
      provident recusandae quia facilis qui molestiae tenetur quisquam tempora
      quo? Expedita dolorum aliquid veniam, harum vero culpa ad fuga quia neque
      dicta officiis, deserunt aut vitae quam cupiditate, laboriosam autem velit
      nemo deleniti. Magnam ipsam ullam provident necessitatibus temporibus.
      Atque veniam est dolor omnis, explicabo dolorem labore, officiis non,
      quibusdam molestias vel fugiat cumque impedit eligendi esse asperiores? Et
      libero beatae quis quibusdam officiis. Atque odio voluptatum, debitis
      quisquam iure est!`,
      },
      {
        type: 'sub-heading',
        content: 'Lorem ipsum dolor sit amet consectetur.',
      },
      {
        type: 'paragraph',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, cum,
      eveniet porro, quaerat tempore quae harum libero voluptatem deleniti
      architecto sunt ipsa voluptas doloribus deserunt facere ex culpa? Aperiam
      provident recusandae quia facilis qui molestiae tenetur quisquam tempora
      quo? Expedita dolorum aliquid veniam, harum vero culpa ad fuga quia neque
      dicta officiis, deserunt aut vitae quam cupiditate, laboriosam autem velit
      nemo deleniti. Magnam ipsam ullam provident necessitatibus temporibus.
      Atque veniam est dolor omnis, explicabo dolorem labore, officiis non,
      quibusdam molestias vel fugiat cumque impedit eligendi esse asperiores? Et
      libero beatae quis quibusdam officiis. Atque odio voluptatum, debitis
      quisquam iure est!`,
      },
      {
        type: 'image',
        content:
          'https://images.unsplash.com/photo-1629375788263-9805588916a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80',
        desc: 'Glass Window Panel Achiteture',
      },
      {
        type: 'quote',
        content: 'Intended audience',
        desc: `This tutorial is intended to be beginner-friendly, though I do assume that you're already comfortable with the fundamentals of HTML/CSS.

Unless you're a seasoned CSS expert, I bet you'll learn something neat!`,
      },
      {
        type: 'paragraph',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, cum,
      eveniet porro, quaerat tempore quae harum libero voluptatem deleniti
      architecto sunt ipsa voluptas doloribus deserunt facere ex culpa? Aperiam
      provident recusandae quia facilis qui molestiae tenetur quisquam tempora
      quo? Expedita dolorum aliquid veniam, harum vero culpa ad fuga quia neque
      dicta officiis, deserunt aut vitae quam cupiditate, laboriosam autem velit
      nemo deleniti. Magnam ipsam ullam provident necessitatibus temporibus.
      Atque veniam est dolor omnis, explicabo dolorem labore, officiis non,
      quibusdam molestias vel fugiat cumque impedit eligendi esse asperiores? Et
      libero beatae quis quibusdam officiis. Atque odio voluptatum, debitis
      quisquam iure est!`,
      },
      {
        type: 'paragraph',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, cum,
      eveniet porro, quaerat tempore quae harum libero voluptatem deleniti
      architecto sunt ipsa voluptas doloribus deserunt facere ex culpa? Aperiam
      provident recusandae quia facilis qui molestiae tenetur quisquam tempora
      quo? Expedita dolorum aliquid veniam, harum vero culpa ad fuga quia neque
      dicta officiis, deserunt aut vitae quam cupiditate, laboriosam autem velit
      nemo deleniti. Magnam ipsam ullam provident necessitatibus temporibus.
      Atque veniam est dolor omnis, explicabo dolorem labore, officiis non,
      quibusdam molestias vel fugiat cumque impedit eligendi esse asperiores? Et
      libero beatae quis quibusdam officiis. Atque odio voluptatum, debitis
      quisquam iure est!`,
      },
      {
        type: 'paragraph',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, cum,
      eveniet porro, quaerat tempore quae harum libero voluptatem deleniti
      architecto sunt ipsa voluptas doloribus deserunt facere ex culpa? Aperiam
      provident recusandae quia facilis qui molestiae tenetur quisquam tempora
      quo? Expedita dolorum aliquid veniam, harum vero culpa ad fuga quia neque
      dicta officiis, deserunt aut vitae quam cupiditate, laboriosam autem velit
      nemo deleniti. Magnam ipsam ullam provident necessitatibus temporibus.
      Atque veniam est dolor omnis, explicabo dolorem labore, officiis non,
      quibusdam molestias vel fugiat cumque impedit eligendi esse asperiores? Et
      libero beatae quis quibusdam officiis. Atque odio voluptatum, debitis
      quisquam iure est!`,
      },
      {
        type: 'sub-heading',
        content: 'Lorem ipsum dolor sit amet consectetur.',
      },
      {
        type: 'paragraph',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, cum,
      eveniet porro, quaerat tempore quae harum libero voluptatem deleniti
      architecto sunt ipsa voluptas doloribus deserunt facere ex culpa? Aperiam
      provident recusandae quia facilis qui molestiae tenetur quisquam tempora
      quo? Expedita dolorum aliquid veniam, harum vero culpa ad fuga quia neque
      dicta officiis, deserunt aut vitae quam cupiditate, laboriosam autem velit
      nemo deleniti. Magnam ipsam ullam provident necessitatibus temporibus.
      Atque veniam est dolor omnis, explicabo dolorem labore, officiis non,
      quibusdam molestias vel fugiat cumque impedit eligendi esse asperiores? Et
      libero beatae quis quibusdam officiis. Atque odio voluptatum, debitis
      quisquam iure est!`,
      },
      {
        type: 'image',
        content:
          'https://images.unsplash.com/photo-1629375788263-9805588916a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80',
        desc: 'Glass Window Panel Achiteture',
      },
      {
        type: 'paragraph',
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, cum,
      eveniet porro, quaerat tempore quae harum libero voluptatem deleniti
      architecto sunt ipsa voluptas doloribus deserunt facere ex culpa? Aperiam
      provident recusandae quia facilis qui molestiae tenetur quisquam tempora
      quo? Expedita dolorum aliquid veniam, harum vero culpa ad fuga quia neque
      dicta officiis, deserunt aut vitae quam cupiditate, laboriosam autem velit
      nemo deleniti. Magnam ipsam ullam provident necessitatibus temporibus.
      Atque veniam est dolor omnis, explicabo dolorem labore, officiis non,
      quibusdam molestias vel fugiat cumque impedit eligendi esse asperiores? Et
      libero beatae quis quibusdam officiis. Atque odio voluptatum, debitis
      quisquam iure est!`,
      },
    ],
  };
}
