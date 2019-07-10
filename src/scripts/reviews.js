import Vue from "vue";

// require styles
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

const commentItem = {
    template: "#reviews-item",
    props: ['item'],
    components: {
        swiperSlide
    }
}

new Vue({
    el: "#comments-component",
    template: "#reviews-list",
    components: {
        commentItem,
        swiper,
    },
    data: {
        comments: [
            {
                text: "Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!",
                photo: require(`images/content/reviews-avatar-1.png`),
                name: "Ковальчук Дмитрий",
                position: "Основатель Loftschool"
            },
            {
                text: "Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах",
                photo: require(`images/content/reviews-avatar-2.png`),
                name: "Владимир Сабанцев",
                position: "Преподаватель"
            },
            {
                text: "Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!",
                photo: require(`images/content/reviews-avatar-1.png`),
                name: "Петр Петров",
                position: "Frontend разработчик"
            },
            {
                text: "Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах",
                photo: require(`images/content/reviews-avatar-2.png`),
                name: "Иван Иванов",
                position: "Backend разработчик"
            }
        ],
        swiperOption: {
            slidesPerView: 2,
            navigation: {
                nextEl: '.reviews__controls-next',
                prevEl: '.reviews__controls-prev',
                disabledClass: 'reviews__controls--disabled',
            },
            breakpoints: {  
                // when window width is <= 480px     
                480: {       
                    slidesPerView: 1,  
                },
            } 
        }
    }
})

// script(type="text/x-template")#comments-list
//     section.comments
//         .comments__top
//             h3.comments__title Что обо мне говорят
//             .comments__arrows
//                 .comments__arrow.comments__arrow--prev
//                     +icon('arrow-down')
//                 .comments__arrow.comments__arrow--next
//                     +icon('arrow-down')
//         .comments__items
//             swiper(ref="mySwiper" :options="swiperOption")
//                 comment-item(v-for="item in comments" :item="item")
            
// script(type="text/x-template")#comment-item
//     swiper-slide
//         .comments__item
//             .comments__quote
//                 +icon('quote')
//             .comments__text.text {{ item.text }}
//             .comments__about
//                 img.comments__photo(:src="item.photo")
//                 .comments__info
//                     .comments__name {{ item.name }}
//                     .comments__position.text {{ item.position }}

// import Vue from "vue";

// import Flickity from 'vue-flickity';

// new Vue({
//   el: '#reviews-flickity',
//   components: {
//     Flickity
//   },
  
//   data() {
//     return {
//       flickityOptions: {
//         prevNextButtons: false,
//         pageDots: false,
//         groupCells: 2,
//         wrapAround: true
        
//         // any options from Flickity can be used
//       }
//     }
//   },
  
//   methods: {
//     next() {
//       this.$refs.flickity.next();
//     },
    
//     previous() {
//       this.$refs.flickity.previous();
//     }
//   }
// });