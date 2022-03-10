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

	title.classList.add("book-title");
	author.classList.add("book-content");
	pages.classList.add("book-content");
	read.classList.add("book-button");
	removeButton.classList.add("remove-button");
	book.classList.add("book");

	title.innerText = myLibrary[bookCounter].title;
	author.innerText = `Author: ${myLibrary[bookCounter].author}`;
	pages.innerText = `Pages: ${myLibrary[bookCounter].pages}`;

	if (myLibrary[bookCounter].isRead === true) {
		read.innerText = "Read";
		read.classList.add("read");
	} else {
		read.innerText = "Not Read";
		read.classList.add("not-read");
	}

	removeButton.textContent = "X";

	book.appendChild(removeButton);
	book.appendChild(title);
	book.appendChild(author);
	book.appendChild(pages);
	book.appendChild(read);
	$library.appendChild(book);

	removeBook();
}

$library.addEventListener("mousedown", changeReadStatus);

function changeReadStatus() {
	const $readButtons = document.querySelectorAll(".read");

	$readButtons.forEach((button) => {
		button.addEventListener("click", (e) => {
			e.target.classList.add("not-read");
			e.target.classList.remove("read");
			e.target.innerText = "Not Read";
		});
	});

	const $notReadButtons = document.querySelectorAll(".not-read");

	$notReadButtons.forEach((button) => {
		button.addEventListener("click", (e) => {
			e.target.classList.remove("not-read");
			e.target.classList.add("read");
			e.target.innerText = "Read";
		});
	});
}

function removeBook() {
	const $removeButton = document.querySelectorAll(".remove-button");
	$removeButton.forEach((button) => {
		button.addEventListener("click", (e) => {
			e.preventDefault();
			let target = e.target.closest("div.book");
			let currentTitle = target.querySelector("h2").innerText;

			for (let i = 0; i < myLibrary.length; i++) {
				if (myLibrary[i].title == currentTitle) {
					myLibrary.splice(i, 1);
					bookCounter = bookCounter - 1;
				}
			}
			e.target.closest("div.book").remove();
		});
	});
}

function openPopUp() {
	$form.style.display = "flex";
	$form.style.opacity = 1;
	$modalOverlay.style.display = "flex";
	$modalOverlay.style.opacity = 1;
	$modalOverlay.style.pointerEvents = "all";
}

function closePopUp() {
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
