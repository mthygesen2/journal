(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

exports.journal = function(title, text) {
  this.title = title;
  this.text = text;
  this.wordCount = function() {
    var count = this.text.split(" ");
    return count.length;
  }
}


// exports.module = Journal;

},{}],2:[function(require,module,exports){
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

},{"./../js/journal.js":1}]},{},[2]);
