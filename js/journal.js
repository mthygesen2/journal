
exports.journal = function(title, text, date) {
  this.title = title;
  this.text = text;
  this.date = date;
  this.wordCount = function() {
    var count = this.text.split(" ");
    count = count.filter(function(str){
      return /\S/.test(str);
    });
    return count.length;
  }
}


// exports.module = Journal;
