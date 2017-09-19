var express = require('express');
var router = express.Router();

/* GET home page. */
exports.index =  function(req, res){
  res.render('index', { title: 'Paul\'s Music Blog' });
};

exports.audio =  function(req, res){
  res.render('audio', { title: 'Audio' });
};

exports.video =  function(req, res){
  res.render('video', { title: 'Video' });
};

exports.blog =  function(req, res){
  res.render('blog', { title: 'Blog' });
};

exports.practice =  function(req, res){
  res.render('practice', { title: 'Practice' });
};
