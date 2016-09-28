// Variable are names that we give to data.
// Functions are names that we give to data.
//document.querySelector() is more popular than document.getElementById()

function startup() {
  console.log('hello');
  let greenButton = document.querySelector('#yes');
  greenButton.addEventListener('click', clickYes);
 
  let redButton = document.querySelector('#no');
  redButton.addEventListener('click', clickNo);
};

function clickNo() {
  console.log('red button');
  getBook(false);
};

function clickYes() {
  console.log('you clicked green!');
  getBook(true);
};

function getBook(liked) {

  fetch('http://crash.queencityiron.com/book')
    // once we hear back, then do something with the response
    .then(function readJSON(response) {
      return response.json();
    })
    .then(function logIt(book) {
      // the argument 'book' is the new book shown in the app
      //console.log('JSON book information:',book);
      let titleBox = document.querySelector('#info >  h2');
      titleBox.textContent = book.title;

      let authorBox = document.querySelector('#info > h3');
      authorBox.textContent = book.author;
      
      let bookCover = document.querySelector('main > img');
      bookCover.src = book.cover;

      if (liked) {
        console.log('Since you love it, we bought it for you!');
        console.log('Your account was charged $' + book.price);
      }
      else {
        console.log('Sorry. Try this one.');
      }
      
        // Add a new class to an element
        // bookCover.classList.add('cool-class');
        // bookCover.setAttribute('id', 'cover-image');
    });
};


window.addEventListener('load', startup);
