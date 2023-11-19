function findAuthorById(authors, id) {
return authors.find(author => author.id === id);
}
function findBookById(books, id) {
return books.find(item => item.id===id);
}
function partitionBooksByBorrowedStatus(books) {
let borrowedArr = books.filter((book) =>!book.borrows[0].returned);
let returnArr = books.filter((book) => book.borrows[0].returned);
let partitionArr = [borrowedArr, returnArr];
return partitionArr;
}


function getBorrowersForBook(book, accounts){
let borrowers = book.borrows.map(borrower => {
    let account = accounts.find((account) => account.id === borrower.id);
    return {...borrower, ...account}
  });
  
  return borrowers.slice(0, 10)
}
  module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
