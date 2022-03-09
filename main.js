//Global

const $addButton = document.querySelector(".add");
const $form = document.querySelector(".form-popup");
const $library = document.querySelector("#library");
const $createBookButton = document.querySelector("#create-button");
let myLibrary = [];
let bookCounter = 0;

//Constructor

function Book(title, author, pages, isRead) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.isRead = isRead;
}

//Prototype Functions

Book.prototype.info = function () {
	return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}`;
};

//Add Book To Library

/*
function addBookToLibrary() {
	
}
addBookToLibrary();

function displayingBooks(myLibrary) {
	for (i = 0; i < myLibrary.length; i++) {
		let book = document.createElement("div");
		let title = document.createElement("h2");
		let author = document.createElement("p");
		let pages = document.createElement("p");
		let read = document.createElement("p");
		let remove = document.createElement("remove");

		title.innerText = myLibrary[i].title;
		author.innerText = `Author: ${myLibrary[i].author}`;
		pages.innerText = `Pages: ${myLibrary[i].pages}`;
		read.innerText = myLibrary[i].read;

		book.classList.add("book");
		book.appendChild(title);
		book.appendChild(author);
		book.appendChild(pages);
		book.appendChild(read);
		$library.appendChild(book);
	}
}

displayingBooks(myLibrary);
*/

function createBook() {
	$createBookButton.addEventListener("click", () => {
		let title = document.querySelector("#title").value;
		let author = document.querySelector("#author").value;
		let pages = document.querySelector("#pages").value;
		let hasBeenRead = document.querySelector("#read").checked;

		const newBook = new Book(title, author, pages, hasBeenRead);

		myLibrary.push(newBook);
		console.log(myLibrary);
		title.value = "";
		author.value = "";
		pages.value = "";

		displayBook();
		bookCounter = bookCounter + 1;
	});
}

function displayBook() {
	let book = document.createElement("div");
	let title = document.createElement("h2");
	let author = document.createElement("p");
	let pages = document.createElement("p");
	let read = document.createElement("p");

	title.innerText = myLibrary[bookCounter].title;
	author.innerText = `Author: ${myLibrary[bookCounter].author}`;
	pages.innerText = `Pages: ${myLibrary[bookCounter].pages}`;
	read.innerText = myLibrary[bookCounter].read;

	book.classList.add("book");
	book.appendChild(title);
	book.appendChild(author);
	book.appendChild(pages);
	book.appendChild(read);
	$library.appendChild(book);
}

function displayForm() {
	$addButton.addEventListener("click", () => {
		$form.style.display = "flex";
		$form.style.opacity = 1;
	});

	$createBookButton.addEventListener("click", () => {
		$form.style.display = "none";
		$form.style.opacity = 0;
	});
}

displayForm();
createBook();
