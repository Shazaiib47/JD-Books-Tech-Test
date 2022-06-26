/* Making an API Call by declaring a variable, and using async to return back a response from below API.
   Await is used below to wait for a response within the async block to return a result from API.
   Fetch being used to request to the server via api below and load dynamic information on the webpage */
const getData = async () => {
    let res = await (await fetch("https://www.googleapis.com/books/v1/volumes?q=HTML5")).json();
    /* Slicing sequence through API above to begin at 8 and end at 10, fetching only 2 books for featured. */
    const featuredBooks = res.items.slice(8, 10);
     /* Declared a variable called markup to dynamically create a card using divs and assigning classes
    and using json classes from above API to append to each div to fetch the required data */
    let markup = "";
    featuredBooks.forEach((obj) => {
      markup += `
            <div id=${obj.volumeInfo.title
              .split(" ")
              .join("_")} class="featured-book">
            <div class="featured-book-cover">
            <img class="featured-book-img" src="${
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
     /* The below inserts the above markup by targeting .featured-books in HTML through the use of queryselection
    and uses insertAdjacentHTML to insert the div after the div starts through the variable declared above called markup */
    document.querySelector(".featured-books").insertAdjacentHTML("afterbegin", markup);
    // Get the id stored in localstorage
    const selectedItem = localStorage.getItem("selectedItem");
    /* After 500 ms (after the api is called), finds the element with the book id that was stored in
       localstorage and adds the class "is-selected" to highlight card selection
       setTimeout used to call a function after a number of ms (500) */
    setTimeout(() => {
      document.getElementById(`${selectedItem}`).classList.add("is-selected");
    }, 500);
     /* Declared variable under fBooks (Featured Books for the 2) that uses method of document interface to return an array
     by targeting "featured-book" */
    let fBooks = document.getElementsByClassName("featured-book");
    for(let i = 0; i < fBooks.length; i++) {
      fBooks[i].addEventListener("click", () => {
        const classes = fBooks[i].classList;
        if(classes.contains("is-selected")) {
        /* If fBooks is selected through the class, then remove the is-selected class and also remove from localstorage */
          fBooks[i].classList.remove("is-selected");
          localStorage.removeItem("selectedItem", fBooks[i].id);
        } else {
             /* This Stores the selected book's ID into localstorage via is-selected class */
          fBooks[i].classList.add("is-selected");
          localStorage.setItem("selectedItem", fBooks[i].id);
        }
      });
    }
  };
  getData();