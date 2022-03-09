//Global

const $addButton = document.querySelector(".add");
const $form = document.querySelector(".form-popup");
const $library = document.querySelector("#library");
const $createBookButton = document.querySelector("#create-button");
let myLibrary = [];

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
	const title = prompt("whats the title of your book?");
	const author = prompt("whats the Author of your book?");
	const pages = prompt("whats the number of Pages of you book?");
	const isRead = prompt("Has the book been read?");

	let book = new Book(title, author, pages, isRead);

	myLibrary.push(book);
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

$addButton.addEventListener("click", () => {
	$form.style.display = "flex";
	$form.style.opacity = 1;
});

$createBookButton.addEventListener("click", () => {
	$form.style.display = "none";
	$form.style.opacity = 0;
});
