$(document).ready(() => {
   //adds functionality to sidebar
   $('.sidenav').sidenav(); 

   //array of categories for user to choose from 
   let categories = ['Video Games', 'Books', 'Cartoons and Animations', 
   'Film', 'Music', 'Television' ]

   //creates new card for each quiz category 
   categories.forEach(category => {
     let newCategory = $('<div>').addClass('s12 l6'); 
     
     let card = $('<div>').addClass('card'); 

     let content = $('<div>').addClass('card-content'); 

     let categoryTitle = $('<span>').addClass('card-title'); 
     categoryTitle.text(category); 

     let btn = $('<a>').addClass('waves-effect waves-light card-btn btn-large'); 
     btn.attr('data-quiz', category); 
     btn.text('Take Quiz'); 

     //when user clicks quiz, makes api call in generateQuiz
     btn.on('click', function(){
       generateQuiz(category);  
     })

     content.append(categoryTitle, btn); 
     card.append(content); 
     newCategory.append(card); 

     $('.category-row').append(newCategory); 
   })

   const generateQuiz  = category =>{
     //alert(category); 

     $.ajax({
       url: "/api/categories", 
       method: "GET"
     }).then(function(response){ 
       console.log(response); 
     })
     //when user clicks take quiz
     //the appropriate quiz will appear
     //ajax call to right quiz using the data-quiz attribute set to each button
   }
 
});
