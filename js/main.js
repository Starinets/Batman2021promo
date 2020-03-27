$(document).ready(function() {
  let menuItems = $(".menu-item-link");

  menuItems.on("click", function(event) {
    event.preventDefault();

    let activeMenuItem = $(this);
    let activeContent = activeMenuItem.attr("href");

    $(".active-menu-item").removeClass("active-menu-item");
    activeMenuItem.addClass("active-menu-item");

    $(".content-article.visible").removeClass("visible");
    $(activeContent).addClass("visible");
  });
});
