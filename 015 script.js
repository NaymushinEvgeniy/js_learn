/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы посмотрели? ', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10 && personalMovieDB.count > 0){
    alert("Просмотрено довольно мало фильмов");
} 
else if (personalMovieDB.count < 30 && personalMovieDB.count > 0) {
    alert("Вы классический зритель");
}
else if (personalMovieDB.count > 30) {
    alert("Вы киноман!!");
}
else {
    alert("Ошибочное значение!");
}

let a = [];
let b = [];

/* for (let i=0; i<2; i++ ) {
    a[i] = prompt('Один из последних просмотренных фильмов', '');
    b[i] = prompt('На сколько вы оцените его??', '');
    personalMovieDB.movies[a[i]] = b[i]
}; */

/* let i =0;
while (i< 2) {
    a[i] = prompt('Один из последних просмотренных фильмов', '');
    if (a [i] == '' || a[i] ===null || a[i].length>50 ) {
        continue;
    }
    else {
        b [i] = prompt('Насколько вы оцените его?', '');
    }
    personalMovieDB.movies[a[i]] = b [i];
    i++;
}

 */

/* for (let i=0; i <2; i++){
    a[i] = prompt('Один из последних просмотренных фильмов', '');
    if (a [i] == '' || a[i] ===null || a[i].length>50 ) {
        i = -1;
    }
    else {
        b[i] = prompt('На сколько вы оцените его??', '');
        personalMovieDB.movies[a[i]] = b[i];
    }

} */
let i = 0;
 do { 
    a[i] = prompt('Один из последних просмотренных фильмов', '');
    if (a [i] == '' || a[i] ===null || a[i].length>50 ) {
        continue;
        }
    else {
        b [i] = prompt('Насколько вы оцените его?', '');
    }
    personalMovieDB.movies[a[i]] = b [i];
    i++;} 
    while ( i <2 );
console.log(personalMovieDB);

// Код возьмите из предыдущего домашнего задания