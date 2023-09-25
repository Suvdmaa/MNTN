$(".quick a").on("click", function () {
  $(this).parents(".quick").find("a").removeClass("active");
  $(this).addClass("active");
});
AOS.init();

const toggleBtn = document.querySelector('.toogle-btn');
const sidebar = document.querySelector('.sidebar');
const toggleMenu = document.getElementById('toggle-menu');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('show-sidebar');
});

toggleMenu.addEventListener('change', () => {
  sidebar.classList.toggle('show-sidebar', toggleMenu.checked);
});