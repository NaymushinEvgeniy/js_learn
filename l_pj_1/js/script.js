/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Терминатор",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против всех"
    ]
};

/* let promo = document.getElementsByClassName('promo__adv');
promo[0].remove(); */
const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');
      
adv.forEach(item => {
    item.remove();
})

genre.textContent = 'Драма';

poster.style.backgroundImage = `url("img/bg.jpg")`;

movieList.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
     
});

/* let genre = document.getElementsByClassName('promo__genre');
genre[0].innerHTML = "Драма"; */

/* let genre = document.querySelector('.promo__genre');
genre.innerHTML = 'Драма'; */

/* let bgel = document.querySelector('.promo__bg');
bgel.style.backgroundImage = `url("img/bg.jpg")`;  */

/* let listfilms = document.getElementsByClassName('promo__interactive-item');
for (let i=0; listfilms.length; i++) {
    listfilms[i].innerHTML = `${i+1}. ${movieDB.movies[i]}`;
} */