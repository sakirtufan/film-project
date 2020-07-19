const form = document.getElementById('film-form');
const titleElement = document.getElementById('title');
const directorElement = document.getElementById('director');
const urlElement = document.getElementById('url');

//UI objesini baslatma
const ui = new UI();

//Storage objesi üretme
const storage = new Storage();

//tüm eventleri yükleme

eventListeners();

function eventListeners(){
   form.addEventListener('submit',addFilm);
   document.addEventListener('DOMContentLoaded',function(){
      let films = storage.getFilmsFromStorage();
      ui.loadAllFilms(films);
   });
}

function addFilm(e){
   const title = titleElement.value;
   const director = directorElement.value;
   const url = urlElement.value;

   if(title === '' || director === '' || url === ''){
      //hata
      ui.displayMessages('tüm alanlari doldurunuz','danger');
   }else{
      //yeni film olusturma
      const newFilm = new Film(title,director,url);

      ui.addFilmToUi(newFilm);   //arayüze film ekleme
      storage.addFilmToStorage(newFilm);  //Storage'a film ekleme
      ui.displayMessages('film basariyla eklendi','success');
   }




   ui.clearInputs(titleElement,directorElement,urlElement);

   e.preventDefault();
}