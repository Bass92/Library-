function findAccountById(accounts, id) {
  return accounts.find(item =>item.id === id);
}

function sortAccountsByLastName(accounts) {
return accounts.sort((APR, LTC) => APR.name.last.toLowerCase() > LTC.name.last.toLowerCase()? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
  let total = []; 
  for (let bookNum in books){
    let tracker = books[bookNum].borrows.find((borrow) =>borrow.id === account.id);
    if (tracker){
    total.push(tracker)
    }
    }
    return total.length
  }
  


function getBooksPossessedByAccount(account, books, authors) {
  return (
  books.filter((book) => book.borrows[0].id === account.id && !book.borrows[0].returned).map((book) => {book["author"] = authors.find((author) => author.id === book.authorId);
  return book;
})
);
}
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
