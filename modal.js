const open = document.querySelector(".open");
const close = document.querySelector(".modal__closeBtn");
const modal = document.querySelector(".modal");

const save = document.querySelector(".modal__resultBtn")




function init() {
  open.addEventListener("click",function() {
    modal.classList.remove("hidden");
  });

  save.addEventListener("click", function() {

    modal.classList.add("hidden");
    modal.classList.remove("hidden2");
    

  })

  close.addEventListener("click", function() {
    modal.classList.add("hidden");
  });
}

init();
