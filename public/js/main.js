$(document).ready(() => {
  $(document).ready(function(){ 
    $('.sidenav').sidenav(); 
  })

  //array of categories for user to choose from 
  let categories = ['Video Games', 'Books', 'Cartoons and Animations', 
  'Film', 'Music', 'Board Games', 'Television' ]

  //creates new card for each quiz category 
  categories.forEach(category => {
    let newCategory = $('<div>').addClass('s12 l6'); 
    
    let card = $('<div>').addClass('card'); 

    let content = $('<div>').addClass('card-content'); 

    let categoryTitle = $('<span>').addClass('card-title'); 
    categoryTitle.text(category); 

    content.append(categoryTitle); 
    card.append(content); 
    newCategory.append(card); 

    $('.row').append(newCategory); 
  })
});
