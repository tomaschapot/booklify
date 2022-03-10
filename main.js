//Global

const $addButton = document.querySelector(".add");
const $form = document.querySelector(".form-popup");
const $library = document.querySelector("#library");
const $createBookButton = document.querySelector("#create-button");
const $container = document.querySelector(".container");
const $modalOverlay = document.querySelector(".modal-overlay");
let myLibrary = [];
let bookCounter = 0;

$form.onsubmit = createBook;

//Constructor

class Book {
	constructor(title, author, pages, isRead) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.isRead = isRead;
	}
}

function createBook(e) {
	e.preventDefault();

	let title = document.querySelector("#title");
	let author = document.querySelector("#author");
	let pages = document.querySelector("#pages");
	let hasBeenRead = document.querySelector("#read");

	const newBook = new Book(
		title.value,
		author.value,
		pages.value,
		hasBeenRead.checked
	);

	myLibrary.push(newBook);
	console.log(myLibrary);

	displayBook();

	bookCounter = bookCounter + 1;

	title.value = "";
	author.value = "";
	pages.value = "";

	closePopUp();
}

function displayBook() {
	let book = document.createElement("div");
	let title = document.createElement("h2");
	let author = document.createElement("p");
	let pages = document.createElement("p");
	let read = document.createElement("button");
	let removeButton = document.createElement("button");
	removeButton.classList.add("remove-button");
	removeButton.textContent = "X";

	read.classList.add("button");
	read.innerText = "Has been Read?";

	title.innerText = myLibrary[bookCounter].title;
	author.innerText = `Author: ${myLibrary[bookCounter].author}`;
	pages.innerText = `Pages: ${myLibrary[bookCounter].pages}`;
	book.appendChild(removeButton);
	book.classList.add("book");
	book.appendChild(title);
	book.appendChild(author);
	book.appendChild(pages);
	book.appendChild(read);
	$library.appendChild(book);
	removeBook();
}

function removeBook() {
	const $removeButton = document.querySelectorAll(".remove-button");
	$removeButton.forEach((button) => {
		button.addEventListener("click", (e) => {
			e.preventDefault();
			e.target.closest("div.book").remove();
		});
	});
}

function openPopUp(e) {
	$form.style.display = "flex";
	$form.style.opacity = 1;
	$modalOverlay.style.display = "flex";
	$modalOverlay.style.opacity = 1;
	$modalOverlay.style.pointerEvents = "all";
}

function closePopUp(e) {
	$form.style.display = "none";
	$form.style.opacity = 0;
	$modalOverlay.style.display = "none";
	$modalOverlay.style.opacity = 1;
	$modalOverlay.style.pointerEvents = "none";
}

function displayForm() {
	$addButton.addEventListener("click", openPopUp);
	$modalOverlay.addEventListener("click", closePopUp);
}

displayForm();
createBook();
