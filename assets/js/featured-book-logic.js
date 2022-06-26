const getData = async () => {
    let res = await (
        await fetch("https://www.googleapis.com/books/v1/volumes?q=HTML5")
    ).json();
const featuredBooks = res.items.slice(8,10);
    let markup = "";
    featuredBooks.forEach((obj) => {
        markup += `
        <div class="featured-book">
        <div class="featured-book-cover">
        <img class="featured-book-img" src="${
            obj.volumeInfo.imageLinks.thumbnail}" alt"" />
        </div>
        <div class="featured-book-content">
        <h4 class="book-title">${obj.volumeInfo.title}</h4>
        <h5 class="author">${obj.volumeInfo.authors}</h5>
        <h6 class="pages">${obj.volumeInfo.pageCount}</h6>
        <p class="little-info">${obj.volumeInfo.description.substr(
            0, 140
        )}</p>
        </div>
        </div>
        `;
    });
    document.querySelector(".featured-books").insertAdjacentHTML("afterbegin", markup);
  
    let fBooks = document.getElementsByClassName('featured-book');
    for (let i = 0; i < fBooks.length; i++) {
      fBooks[i].addEventListener('click', () => {
          fBooks[i].classList.toggle("is-selected")
      });
      }
};
getData();