const getTheTitles = function(obj) {
  return obj.map(function(book) {return book.title;})
};

module.exports = getTheTitles;
