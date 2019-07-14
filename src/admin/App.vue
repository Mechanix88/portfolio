
<template lang="pug">
  .wrapper  
    header.header
      .container.header-container
        .header__user
          .header__user-img
            img.header__user-avatar(src="/src/images/content/user.jpg", alt="User")
          .header__user-wrapper
            .header__user-name Павлов Евгений
            .header__user-admin Панель администрирования
            a(href="#").header__exit Выйти

    nav.nav
      .container.nav-container
        ul.nav__list
          li.nav__item.nav__item--active 
            a.nav__link(href="#") Обо мне
          li.nav__item 
            a.nav__link(href="#") Работы
          li.nav__item 
            a.nav__link(href="#") Отзывы
            
    .main-content
      section.about
        .container.container-about
          .about__header
            h2.about__title Блок «Обо мне»
            button.button-add Добавить группу
          .about__wrapper
            ul.cards
              li.cards__item
                .cards__wrapper
                  .cards__header
                    input(placeholder = "Название новой группы").cards__group-name
                    .cards__buttons
                      button.button-apply 
                      button.button-false
                  .cards__content
                  .cards__footer
                    form()
                      input(type = "text" placeholder = "Новый навык" required).cards__new-skill
                      input(type = "text" placeholder = "100 %" required).cards__new-percent
                      button.button-add.button-add-big
              li.cards__item
                .cards__wrapper  
                  .cards__header
                    input(value = "Workflow").cards__group-name
                    .cards__buttons
                      button.button-apply
                      button.button-false
                  .cards__content
                    .cards__row
                      input(type = "text" value = "Git").cards__name
                      label.cards__input-wrapper 
                        input(type = "text" value = "100").cards__value 
                        span.cards__percent %
                      .cards__buttons
                        button.button-edit
                        button.button-delete
                    .cards__row
                      .cards__row
                      input(type = "text" value = "Git").cards__name
                      label.cards__input-wrapper 
                        input(type = "text" value = "100").cards__value 
                        span.cards__percent %
                      .cards__buttons
                        button.button-edit
                        button.button-delete
                    .cards__row
                      .cards__row
                      input(type = "text" value = "Git").cards__name
                      label.cards__input-wrapper 
                        input(type = "text" value = "100").cards__value 
                        span.cards__percent %
                      .cards__buttons
                        button.button-edit
                        button.button-delete
                    .cards__row
                      .cards__row
                      input(type = "text" value = "Git").cards__name
                      label.cards__input-wrapper 
                        input(type = "text" value = "100").cards__value 
                        span.cards__percent %
                      .cards__buttons
                        button.button-edit
                        button.button-delete
                  .cards__footer
                    input(type = "text" placeholder = "Новый навык").cards__new-skill
                    input(type = "text" placeholder = "100 %").cards__new-percent
                    button.button-add.button-add-big
              li.cards__item
                .cards__wrapper  
                  .cards__header
                    input(placeholder = "Frontend").cards__group-name
                    .cards__buttons
                      button.button-apply
                      button.button-false
                  .cards__content
                    .cards__row
                      input(type = "text" value = "Git").cards__name
                      label.cards__input-wrapper 
                        input(type = "text" value = "100").cards__value 
                        span.cards__percent %
                      .cards__buttons
                        button.button-edit
                        button.button-delete
                    .cards__row
                      input(type = "text" value = "Git").cards__name
                      label.cards__input-wrapper 
                        input(type = "text" value = "100").cards__value 
                        span.cards__percent %
                      .cards__buttons
                        button.button-edit
                        button.button-delete
                    .cards__row
                      input(type = "text" value = "Git").cards__name
                      label.cards__input-wrapper 
                        input(type = "text" value = "100").cards__value 
                        span.cards__percent %
                      .cards__buttons
                        button.button-edit
                        button.button-delete
                    .cards__row
                      input(type = "text" value = "Git").cards__name
                      label.cards__input-wrapper 
                        input(type = "text" value = "100").cards__value 
                        span.cards__percent %
                      .cards__buttons
                        button.button-edit
                        button.button-delete
                  .cards__footer
                    input(type = "text" placeholder = "Новый навык").cards__new-skill
                    input(type = "text" placeholder = "100 %").cards__new-percent
                    button.button-add.button-add-big
      section.works
        .container.container-works
          h2.admin-title Блок «Работы»
          .work-edit
            h3.admin-subtitle Редактирование работы
            .work-edit__wrapper  
              .work-edit__upload
                .work-edit__text Перетащите или загрузите для загрузки изображения
                button.button-admin Загрузить
              form.work-edit__form
                .work-edit__form-row
                  label.work-edit__form-label(for = "name") Название
                  input.work-edit__form-input(id = "name" type = "text")
                .work-edit__form-row
                  label.work-edit__form-label(for = "link") Ссылка
                  input.work-edit__form-input(id = "link" type = "text")
                .work-edit__form-row
                  label.work-edit__form-label(for = "desc") Описание
                  textarea.work-edit__form-textarea(id = "desc")
                .work-edit__form-row
                  label.work-edit__form-label(for = "tags") Добавление тэга
                  input.work-edit__form-input(id = "tags" type = "text")
                .buttons__wrapper
                  button.button-cancel Отмена
                  button.button-admin Сохранить
          .work-add
            ul.work-add__list
              li.add__button
                .button-add-wrapper
                  .button-circle
                  .button-add-text Добавить<br> работу
              li.work-add__item
                .work-add__item-img
                  img.work-add__item-preview(src="/../src/images/content/admin-preview-1.jpg")
                .work-add__item-wrapper  
                  .work-add__item-title Сайт школы образования
                  p.work-add__item-desc Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  a.work-add__item-link http://loftschool.ru
                  .work-add__item--buttons
                    button.edit Править
                    button.delete Удалить
              li.work-add__item
                .work-add__item-img
                  img.work-add__item-preview(src="/../src/images/content/admin-preview-1.jpg")
                .work-add__item-wrapper    
                  .work-add__item-title Сайт школы образования
                  p.work-add__item-desc Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  a.work-add__item-link http://loftschool.ru
                  .work-add__item--buttons
                    button.edit Править
                    button.delete Удалить
              li.work-add__item
                .work-add__item-img
                  img.work-add__item-preview(src="/../src/images/content/admin-preview-1.jpg")
                .work-add__item-wrapper    
                  .work-add__item-title Сайт школы образования
                  p.work-add__item-desc Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  a.work-add__item-link http://loftschool.ru
                  .work-add__item--buttons
                    button.edit Править
                    button.delete Удалить
              li.work-add__item
                .work-add__item-img
                  img.work-add__item-preview(src="/../src/images/content/admin-preview-1.jpg")
                .work-add__item-wrapper   
                  .work-add__item-title Сайт школы образования
                  p.work-add__item-desc Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  a.work-add__item-link http://loftschool.ru
                  .work-add__item--buttons
                    button.edit Править
                    button.delete Удалить
      section.reviews
        .container.container-reviews
          h2.admin-title Блок «Отзывы»
          .reviews__wrapper
            h3.admin-subtitle Новый отзыв
            .reviews__add-wrapper  
              .reviews__add
                .reviews__add-avatar
                button.reviews__add-button Добавить фото
              form.reviews__form
                .reviews__form-row
                  .reviews__form-group
                    label.reviews__form-label(for = "author") Имя автора
                    input.reviews__form-input(id = "author" type = "text")
                  .reviews__form-group
                    label.reviews__form-label(for = "title") Титул автора
                    input.reviews__form-input(id = "title" type = "text")
                .reviews__form-row-textarea
                  label.reviews__form-label(for = "reviews") Отзыв
                  textarea.reviews__form-textarea
                .reviews__form-buttons
                  button.button-cancel Отмена
                  button.button-admin Сохранить
          ul.reviews__add-list
            li.add__button
              .button-add-wrapper
                  .button-circle
                  .button-add-text Добавить отзыв
            li.reviews__add-item
              .reviews__add-item-wrapper  
                .reviews__add-header
                  .reviews__add-header-avatar
                    img(src="/src/images/content/admin-avatar.png", alt="alt")
                  .reviews__add-header-wrapper
                    .reviews__add-header-name Владимир Сабанцев
                    .reviews__add-header-subtitle Преподаватель
                p.reviews__add-text Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                .reviews__buttons
                  button.edit Править
                  button.delete Удалить
            li.reviews__add-item
              .reviews__add-item-wrapper  
                .reviews__add-header
                  .reviews__add-header-avatar
                    img(src="/src/images/content/admin-avatar.png", alt="alt")
                  .reviews__add-header-wrapper
                    .reviews__add-header-name Владимир Сабанцев
                    .reviews__add-header-subtitle Преподаватель
                p.reviews__add-text Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                .reviews__buttons
                  button.edit Править
                  button.delete Удалить
            li.reviews__add-item
              .reviews__add-item-wrapper  
                .reviews__add-header
                  .reviews__add-header-avatar
                    img(src="/src/images/content/admin-avatar.png", alt="alt")
                  .reviews__add-header-wrapper
                    .reviews__add-header-name Владимир Сабанцев
                    .reviews__add-header-subtitle Преподаватель
                p.reviews__add-text Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                .reviews__buttons
                  button.edit Править
                  button.delete Удалить
            li.reviews__add-item
              .reviews__add-item-wrapper  
                .reviews__add-header
                  .reviews__add-header-avatar
                    img(src="/src/images/content/admin-avatar.png", alt="alt")
                  .reviews__add-header-wrapper
                    .reviews__add-header-name Владимир Сабанцев
                    .reviews__add-header-subtitle Преподаватель
                p.reviews__add-text Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                .reviews__buttons
                  button.edit Править
                  button.delete Удалить
            
             
</template>


<style lang="postcss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";
@import "../styles/admin/header.pcss";
@import "../styles/admin/nav.pcss";
@import "../styles/admin/about.pcss";
@import "../styles/admin/works.pcss";
@import "../styles/admin/reviews.pcss";
</style>

// <script>
// import { Validator } from "simple-vue-validator";

// </script>