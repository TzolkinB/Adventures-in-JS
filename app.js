// Variable are names that we give to data.
// Functions are names that we give to data.
//document.getElementById()
//synatx example: window.addEventListener('load', sayHi);
// ^ above code means on load run function sayHi

function startup() {
  console.log('hello');
  let greenButton = document.querySelector('#yes');
  greenButton.addEventListener('click', clickYes);
 
  let redButton = document.querySelector('#no');
  redButton.addEventListener('click', clickNo);
};
window.addEventListener('load', startup);

function clickYes() {
  //document.getElementById('yes');
  console.log('you clicked green!');

  fetch('http://crash.queencityiron.com/book')
    // once we hear back, then do something with the response
    .then(function readJSON(response) {
      return response.json();
    })
    .then(function logIt(book) {
      // the argument 'book' is the new book shown in the app
      console.log(book);
      let titleBox = document.querySelector('#info >  h2');
      titleBox.textContent = book.title;

      let authorBox = document.querySelector('#info > h3');
      authorBox.textContent = book.author;
      
      let bookCover = document.querySelector('main > img');
      bookCover.src = book.cover;

      console.log('Since you love it, we bought it for you!');
      console.log('Your account was charged $' + book.price);
    });
};

function clickNo() {
  //document.getElementById('no');
  console.log('too bad');
};


//url: crash.queencityiron.com/book
//using API FETCH
