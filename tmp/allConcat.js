var journal = require('./../js/journal.js').Journal;

$(document).ready(function(){
  $('#journal').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var text = $('#text').val();
    // var entry = new Journal(title, text);
    $('.postTitle').append("<h2>" + title + "</h2>");
    console.log ("alert");
    $('.post').append("<p>" + text + "</p>");
    });
  });


    // $('.post').append("<p>" + entry.text + "</p>");


exports.journal = function(title, text) {
  this.title = title;
  this.text = text;
}

// this.wordCount = function() {
//   var count = this.text.split(" ");
//   return count.length;
// }

// exports.module = Journal;
