/*eslint-env browser*/
/*global $*/

$(document).ready(function(){

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDqTh_hYKWJ5pEwimDrLgA3PL1LX2iOlkk",
        authDomain: "fir-class-stuff.firebaseapp.com",
        databaseURL: "https://fir-class-stuff.firebaseio.com",
        projectId: "fir-class-stuff",
        storageBucket: "fir-class-stuff.appspot.com",
        messagingSenderId: "933264119906"    
    };//ending config
    firebase.initializeApp(config);

     var database = firebase.database();

     // adding a button for submitting train info
     $("#addTrain").on("click", function(event){
         event.preventDefault();

         //grabbing user input

     });
     //end of the on click function for button
});//ending document.ready function 

