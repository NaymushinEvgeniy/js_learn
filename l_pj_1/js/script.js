/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Терминатор",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против всех"
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const newFilm =event.input.value;
        const favorite = checkbox.checked;

        movieDB.movies.push(newFilm);
        movieDB.movies.sort();
    });
        
    adv.forEach(item => {
        item.remove();
    })

    genre.textContent = 'Драма';

    poster.style.backgroundImage = `url("img/bg.jpg")`;

    

    movieDB.movies.sort();

     

    function createMovieList (films, parrent) {
        parrent.innerHTML = "";

        films.forEach((film, i) => {
            parrent.innerHTML += `
                    <li class="promo__interactive-item">${i+1} ${film}
                        <div clas"delete"></div>
                    </li>
            `;  
            });
    }

    createMovieList(movieDB.movies, movieList);
});



