import 'root/style/glob/glob.scss'
import $ from 'jquery';

//Glob Glob Layout
import './client/glob.Layout.jsx';


//Glob Functional
import F__initInputfield from './functional/input.js';
import F__initRipples from './functional/ripples.js'

F__initInputfield();

$('button').click(function() {
  F__initRipples();
});


$('input').hover(function() {
  console.log('hover');
  F__initInputfield();
});
