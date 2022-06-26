// making api call
const fetchData = async () => {
    let res = await (await fetch("https://www.googleapis.com/books/v1/volumes?q=HTML5")).json();
    const normalBooks = res.items.slice(0, 8);
    let markup = "";
    // creating markup for each card
    normalBooks.forEach((obj) => {
      markup += `
            <div id=${obj.volumeInfo.title
              .split(" ")
              .join("_")} class="book d-flex">
            <div class="book-cover">
            <img class="book-img" src="${
              obj.volumeInfo.imageLinks.thumbnail
            }" alt"" />
            </div>
            <div class="book-content">
            <h4 class="book-title">${obj.volumeInfo.title}</h4>
            <h5 class="author">${obj.volumeInfo.authors[0]}</h5>
            <h6 class="pages">Pages:${obj.volumeInfo.pageCount}</h6>
            <p class="little-info">${obj.volumeInfo.description.substr(0, 140)}</p>
            </div>
         </div>
            `;
    });
    // inserting markup
    document.querySelector(".books").insertAdjacentHTML("afterbegin", markup);
    // Get the id stored in localstorage
    const selectedItem = localStorage.getItem("selectedItem");
    // After 500 ms (after api call), finding element with the book id that was stored in ls and adding class
    setTimeout(() => {
      document.getElementById(`${selectedItem}`).classList.add("is-selected");
    }, 500);
    let nBooks = document.getElementsByClassName("book");
    for(let i = 0; i < nBooks.length; i++) {
      nBooks[i].addEventListener("click", () => {
        const classes = nBooks[i].classList;
        // Store the selected book id in local storage
        if(classes.contains("is-selected")) {
          nBooks[i].classList.remove("is-selected");
          localStorage.removeItem("selectedItem", nBooks[i].id);
        } else {
          nBooks[i].classList.add("is-selected");
          localStorage.setItem("selectedItem", nBooks[i].id);
        }
      });
    }
  };
  fetchData();