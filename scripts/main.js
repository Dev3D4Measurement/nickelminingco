
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

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('header nav');

    hamburger.addEventListener('click', function() {
        nav.classList.toggle('show');
        this.classList.toggle('active');
    });

    // 현재 페이지 메뉴 항목 강조
    const currentPage = window.location.pathname.split("/").pop() || 'index.html';
    const menuItems = document.querySelectorAll('.nav-menu a');
    menuItems.forEach(item => {
        if(item.getAttribute('href') === currentPage) {
            item.classList.add('active');
        }
    });
});

    // 스크롤 이벤트
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 창 크기 변경 시 메뉴 상태 리셋
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            nav.classList.remove('show');
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });