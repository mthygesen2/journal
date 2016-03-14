var journal = require('./../js/journal.js').journal;

$(document).ready(function(){
  $('#journal').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var text = $('#text').val();
    var entry = new journal(title, text);
    $('.posts').append("<div class ='postEntry'>" + "<h2>" + title + "</h2>" + "<p>" + text + "</p>" + entry.wordCount() + "</div>");
    $("#journal")[0].reset();
    });
  });


    // $('.post').append("<p>" + entry.text + "</p>");


exports.journal = function(title, text) {
  this.title = title;
  this.text = text;
  this.wordCount = function() {
    var count = this.text.split(" ");
    return count.length;
  }
}


// exports.module = Journal;
