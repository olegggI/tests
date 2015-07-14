// Author: Thomas Davis <thomasalwyndavis@gmail.com>
// Filename: main.js

// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
  paths: {
    jquery: '../bower_components/jquery/dist/jquery.min',
    underscore: '../bower_components/underscore/underscore-min',
    backbone: '../bower_components/backbone/backbone-min',
    templates: '../templates'
  }
});


// define('firebase', ['firebaseLib'], function(){
//   return window.Firebase;
// });

require([
  // Load our app module and pass it to our definition function
  'app'

], function(App){
  // The "app" dependency is passed in as "App"
  // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
  App.initialize();
});
