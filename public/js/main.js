$(document).ready(() => {
  $(document).ready(() => {
    $(".sidenav").sidenav();
  });

  //array of categories for user to choose from
  const categories = [
    "Video Games",
    "Books",
    "Cartoons and Animations",
    "Film",
    "Music",
    "Board Games",
    "Television"
  ];

  //creates new card for each quiz category
  categories.forEach(category => {
    const newCategory = $("<div>").addClass("s12 l6");

    const card = $("<div>").addClass("card");

    const content = $("<div>").addClass("card-content");

    const categoryTitle = $("<span>").addClass("card-title");
    categoryTitle.text(category);

    content.append(categoryTitle);
    card.append(content);
    newCategory.append(card);

    $(".row").append(newCategory);
  });
});
