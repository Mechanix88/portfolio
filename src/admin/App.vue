<template lang="pug">
  .wrapper  
    header.header
      .conteiner.header-container
        .header__user
          .header__user-img
          .header__user-name Павлов Евгений
          .header__user-admin
        a(href="#").header__exit Выйти

    nav.nav
      .conteiner.nav-container
        ul.nav__list
          li.nav__item 
            a(href="#") Обо мне
          li.nav__item 
            a(href="#") Работы
          li.nav__item 
            a(href="#") Отзывы
            
    .main-content
      section.about
        .conteiner.container-about
          .about__header
            h2.about__title
            a(href="#").button-add Добавить группу
          .about__wrapper
            ul.cards
              li.cards__item
                .cards__header
                  input(placeholder = "Workflow").cards__group-name
                  .cards__buttons
                    button.button-apply
                    button.button-false
                .cards__content
                  .cards__table
                    tr.cards__row
                      td.cards__cell
                        span.cards__name Git
                      td.cards__cell
                        .cards__percent
                          span.cards__input-value 100
                          span.cards__input-precent %
                      td.cards__cell
                        .cards__buttons
                          button.button-edit
                          button.button-delete
                    tr.cards__row
                      td.cards__cell
                        span.cards__name Terminal
                      td.cards__cell
                        .cards__percent
                          span.cards__input-value 90
                          span.cards__input-precent %
                      td.cards__cell
                        .cards__buttons
                          button.button-edit
                          button.button-delete
                    tr.cards__row
                      td.cards__cell
                        span.cards__name Gulp
                      td.cards__cell
                        .cards__percent
                          span.cards__input-value 80
                          span.cards__input-precent %
                      td.cards__cell
                        .cards__buttons
                          button.button-edit
                          button.button-delete
                    tr.cards__row
                      td.cards__cell
                        span.cards__name Webpack
                      td.cards__cell
                        .cards__percent
                          span.cards__input-value 85
                          span.cards__input-precent %
                      td.cards__cell
                        .cards__buttons
                          button.button-edit
                          button.button-delete
                  .cards__footer
                    input(type = "text" placeholder = "Новый навык").cards__new-skill
                    input(type = "text" placeholder = "100 %")
                    button.button-add
              li.cards__item
                .cards__header
                  input(placeholder = "Frontend").cards__group-name
                  .cards__buttons
                    button.button-apply
                    button.button-false
                .cards__content
                  .cards__table
                    tr.cards__row
                      td.cards__cell
                        span.cards__name HTML5
                      td.cards__cell
                        .cards__percent
                          span.cards__input-value 100
                          span.cards__input-precent %
                      td.cards__cell
                        .cards__buttons
                          button.button-edit
                          button.button-delete
                    tr.cards__row
                      td.cards__cell
                        span.cards__name CSS3
                      td.cards__cell
                        .cards__percent
                          span.cards__input-value 90
                          span.cards__input-precent %
                      td.cards__cell
                        .cards__buttons
                          button.button-edit
                          button.button-delete
                    tr.cards__row
                      td.cards__cell
                        span.cards__name Javascript
                      td.cards__cell
                        .cards__percent
                          span.cards__input-value 80
                          span.cards__input-precent %
                      td.cards__cell
                        .cards__buttons
                          button.button-edit
                          button.button-delete
                    tr.cards__row
                      td.cards__cell
                        span.cards__name Jquery и Vue.js
                      td.cards__cell
                        .cards__percent
                          span.cards__input-value 85
                          span.cards__input-precent %
                      td.cards__cell
                        .cards__buttons
                          button.button-edit
                          button.button-delete
                  .cards__footer
                    input(type = "text" placeholder = "Новый навык").cards__new-skill
                    input(type = "text" placeholder = "100 %")
                    button.button-add
      section.works
        .container.container-works     



    

      
          
</template>