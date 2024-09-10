document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('header nav');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
                nav.classList.toggle('show');
                hamburger.classList.toggle('active');
            });
    }

    // 현재 페이지 메뉴 항목 강조
    const currentPage = window.location.pathname.split("/").pop() || 'index.html';
    const menuItems = document.querySelectorAll('nav ul li a');
    menuItems.forEach(item => {
        if(item.getAttribute('href') === currentPage) {
            item.classList.add('active');
        }
    });
});

  // Scroll event
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      document.querySelector("header").classList.add("scrolled");
    } else {
      document.querySelector("header").classList.remove("scrolled");
    }
  });

  // Highlight current page menu item
  const currentPage = window.location.pathname.split("/").pop();
  const menuItems = document.querySelectorAll("header nav ul li a");
  menuItems.forEach((item) => {
    if (item.getAttribute("href") === currentPage) {
      item.classList.add("active");
    }
  });

