const buttons = document.querySelectorAll(".filter");
const items = document.querySelectorAll(".menu-card");

buttons.forEach(button => {

  button.addEventListener("click", () => {

    buttons.forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const category = button.dataset.category;

    items.forEach(item => {

      if (
        category === "all" ||
        item.dataset.category === category
      ) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }

    });

  });

});
