var journal = require('./../js/journal.js').journal;
var moment = require('moment');

$(document).ready(function(){
  $('#journal').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var text = $('#text').val();
    var date = $('#date').val();
    var entry = new journal(title, text);
    $('.posts').append("<div class ='postEntry'>" + "<h2>" + title + "</h2>" + "<p>" + text + "</p>" + "word count: " + entry.wordCount() + "<br>" + moment(date).format('MMM Do YYYY') + "</div>");
    $("#journal")[0].reset();
    });
  });


    // $('.post').append("<p>" + entry.text + "</p>");
