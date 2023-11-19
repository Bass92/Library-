function getTotalBooksCount(books){
  return books.length;
}

function getTotalAccountsCount(accounts) {
return accounts.length;
}

function getBooksBorrowedCount(books) {
const totalBooks = books.filter(book => book.borrows[0].returned === false);
return totalBooks.reduce((sum, books) =>{
  sum = Object.keys(books).length;
  sum++
  return sum;
}, 0);
}

function getMostCommonGenres(books) {
  let bookArr = {};
  books.forEach((book) => {(bookArr[book.genre] == null) ? bookArr[book.genre] = 1 : bookArr[book.genre] += 1;})
  let bookArray = [];
  for (const [key, value] of Object.entries(bookArr)) {
    bookArray.push({
      'name' : key,
      'count' : value
    }); 
  }
  return _showTopFive(bookArray);
} 
function _showTopFive (arr) {
  arr.sort((elementA, elementB) => elementB.count - elementA.count);
  return arr.slice(0, 5)
}

function getMostPopularBooks(books) {
  const popular = books.map(book =>({name: book.title, count: book.borrows.length}))
    popular.sort((a,b) => b.count - a.count)
    return popular.slice(0,5)
  
}

function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach((author) => {
    let refAuth = {
      name: `${author.name.first} ${author.name.last}`, count: 0
    };
    books.forEach((book) => {
    book.authorId === author.id ? refAuth.count += book.borrows.length : null;
    });
    result.push(refAuth);
  });
  return _showTopFive(result);
  }
  module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
