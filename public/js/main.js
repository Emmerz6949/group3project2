$(document).ready(() => {
  //adds functionality to sidebar
  $(".sidenav").sidenav();

  $.ajax({
    //url specific to videogames
    url: "/api/categories",
    method: "GET"
  }).then(response => {
    //array of categories for user to choose from
    const categories = response;
    console.log(categories);
    //creates new card for each quiz category
    categories.forEach(category => {
      const newCategory = $("<div>").addClass("s12 l6");

      const card = $("<div>").addClass("card center");

      const content = $("<div>").addClass("card-content");

      const categoryTitle = $(`<span> id="${category.apiCategoryId}"`).addClass("card-title");
      categoryTitle.text(category.categoryName);

      const btn = $("<a>").addClass(
        "waves-effect waves-light card-btn btn-large"
      );
      btn.attr("data-quiz", category);
      btn.text("Take Quiz");

      //when user clicks quiz, makes api call in generateQuiz
      btn.attr("href", "/quiz/15");

      content.append(categoryTitle, btn);
      card.append(content);
      newCategory.append(card);

      $(".category-row").append(newCategory);
    });
  });

  const generateQuiz = category => {
    //alert(category);

    //when user clicks take quiz
    //the appropriate quiz will appear
    //ajax call to right quiz using the data-quiz attribute set to each button
    $.ajax({
      //url specific to videogames
      url: "/quiz/15",
      method: "GET"
    }).then(response => {
      return;
    });
  };
});
