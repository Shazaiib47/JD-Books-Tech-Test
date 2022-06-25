const fetchData = async () => {
    let res = await (
        await fetch("https://www.googleapis.com/books/v1/volumes?q=HTML5")
    ).json();
    const normalBooks = res.items.slice(0, 8);
    const featuredBooks = res.items.slice(8,10);
    let markup = "";
    normalBooks.forEach((obj) => {
        markup += `
        <div id="book" class="book d-flex">
        <div class="book-cover">
        <img class="book-img" src="${
            obj.volumeInfo.imageLinks.thumbnail}" alt"" />
        </div>
        <div class="book-content">
        <h4 class="book-title">${obj.volumeInfo.title}</h4>
        <h5 class="author">${obj.volumeInfo.authors[0]}</h5>
        <h6 class="pages">${obj.volumeInfo.pageCount[0]}</h6>
        <class="little-info">${obj.volumeInfo.description.substr(
            0, 140
        )}</p>
        </div>
     </div>
        `;
    });
    document.querySelector(".book").insertAdjacentHTML("beforebegin", markup);
  };
  fetchData();
